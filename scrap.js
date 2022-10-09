/* eslint-disable max-len */
const axios = require('axios').default;
const cheerio = require('cheerio');
const fs = require('fs').promises;
require('dotenv').config();

const DESIGN = 'DESIGN';
const COMMON = 'COMMON';

class Parameter {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Scraper {
  constructor(titleSlug, type) {
    this.headers = {};
    this.title = '';
    this.id = '';
    this.titleSlug = titleSlug;
    this.type = type;
    this.codeDefinition = '';
    this.content = '';
    this.functoinCode = '';
    this.functionName = '';
    this.functionParams = [];
    this.functionReturnType = '';
    this.testFunctionCode = '';
    this.code = '';
    this.testCases = [];
    this.testCaseCode = '';
  }

  buildHeaders() {
    this.headers = {
      'referer': 'https://leetcode.com',
      'x-csrftoken': process.env.CSRF_TOKEN,
      'Cookies': process.env.COOKIES,
      'Content-Type': 'application/json',
    };
  }

  async scrapQuestion() {
    const data = {
      query:
        '\n            query getQuestionDetail($titleSlug: String!) {\n              question(titleSlug: $titleSlug) {\n                questionFrontendId\n                title\n                content\n                codeDefinition\n              }\n            }\n        ',
      variables: {
        titleSlug: this.titleSlug,
      },
      operationName: 'getQuestionDetail',
    };

    const result = await axios.post('https://leetcode.com/graphql', data, {
      headers: this.headers,
    });

    const question = result.data.data.question;
    this.id = question.questionFrontendId;
    this.title = question.title;
    if (this.type === '') {
      if (this.title.startsWith('Design')) {
        this.type = DESIGN;
      } else {
        this.type = COMMON;
      }
    }

    this.content = question.content;
    this.codeDefinition = question.codeDefinition;
  }

  removeDefinitionFor(javascript) {
    const definitionForAt = javascript.indexOf('* Definition for');
    if (definitionForAt < 0) {
      return javascript;
    }

    const endAt = javascript.indexOf('*/');
    const result = javascript.substring(endAt + 2);
    return result;
  }

  parseFunctionCode() {
    const codeDefinitionArray = JSON.parse(this.codeDefinition);
    const javascriptObj = codeDefinitionArray.find((d) => d.value == 'javascript');
    let javascript = javascriptObj.defaultCode;
    javascript = this.removeDefinitionFor(javascript);
    const varAt = javascript.indexOf('var');
    const equalAt = javascript.indexOf(' = ');
    this.functionName = javascript.substring(varAt + 4, equalAt).trim();
    this.functionCode = javascript;
    let paramAt = javascript.indexOf('@param');
    while (paramAt > 0) {
      const openAt = javascript.indexOf('{', paramAt);
      const closeAt = javascript.indexOf('}', openAt);
      const paramType = javascript.substring(openAt + 1, closeAt);
      const newLineAt = javascript.indexOf('\n', closeAt);
      const paramName = javascript.substring(closeAt + 1, newLineAt).trim();
      const param = new Parameter(paramName, paramType);
      this.functionParams.push(param);
      paramAt = javascript.indexOf('@param', paramAt + 1);
    }
    const returnAt = javascript.indexOf('@return', paramAt);
    const returnOpenAt = javascript.indexOf('{', returnAt);
    const returnCloseAt = javascript.indexOf('}', returnAt);
    this.functionReturnType = javascript.substring(returnOpenAt + 1, returnCloseAt);
    // replace `var funcName = function()` to `function funcName`
    this.functionCode = this.functionCode.replace(/var ([a-zA-Z]+) = function/, 'function $1');
    this.functionCode = this.functionCode.replace('};', '}');
  }

  generateTestFunctionCode() {
    if (this.type === DESIGN) {
      let input = this.testCases[0].input;
      const openAt = input.indexOf('[');
      const closeAt = input.indexOf(']');
      input = input.substring(openAt + 1, closeAt);
      input = input.replace(/"/g, '');
      input = input.replace(/, /g, ',');
      const actions = input.split(',');
      const actionSet = new Set();
      for (let i = 1; i < actions.length; i++) {
        actionSet.add(actions[i]);
      }

      let actionCode = '';
      for (const action of actionSet.values()) {
        actionCode += `
            case '${action}':
                expect(obj.${action}(...params[i])??null).to.be.eql(expected[i]);
                break;`;
      }

      this.testFunctionCode = `
function test(actions, params, expected) {
    const obj = new ${this.functionName}(...params[0]);
    for (let i=1;i<actions.length;i++) {
        switch(actions[i]) {
${actionCode}

        }
    }
}`;
    } else {
      let functionParamStr = '';
      let testParamStr = '';
      let convertingStatements = '';
      for (const param of this.functionParams) {
        if (param.type === 'Node') {
          testParamStr += param.name + 'Arr, ';
          convertingStatements += `    const ${param.name} = array2Node(${param.name}Arr);\n`;
        } else if (param.type === 'TreeNode') {
          testParamStr += param.name + 'Arr, ';
          convertingStatements += `    const ${param.name} = array2TreeNode(${param.name}Arr);\n`;
        } else if (param.type === 'ListNode') {
          testParamStr += param.name + 'Arr, ';
          convertingStatements += `    const ${param.name} = array2ListNode(${param.name}Arr);\n`;
        } else {
          testParamStr += param.name + ', ';
        }
        functionParamStr += param.name + ', ';
      }
      convertingStatements = convertingStatements.trim();
      functionParamStr = functionParamStr.trim().replace(/,$/, '');
      testParamStr += 'expected';

      let actualStatements = '';
      if (this.functionReturnType === 'Node') {
        actualStatements = `const actualHead = ${this.functionName}(${functionParamStr});\n    const actual = node2Array(actualHead)`;
      } else if (this.functionReturnType === 'TreeNode') {
        actualStatements = `const actualHead = ${this.functionName}(${functionParamStr});\n    const actual = treeNode2Array(actualHead)`;
      } else if (this.functionReturnType === 'ListNode') {
        actualStatements = `const actualHead = ${this.functionName}(${functionParamStr});\n    const actual = listNode2Array(actualHead)`;
      } else {
        actualStatements = `const actual = ${this.functionName}(${functionParamStr});`;
      }

      actualStatements = actualStatements.trim();

      this.testFunctionCode = `
function test(${testParamStr}) {
    ${convertingStatements}
    ${actualStatements}
    //if (actual !== expected) {
    //    console.log(actual, expected);
    //}
    expect(actual).to.be.eql(expected);
}`;
    }
  }

  parseTestCaseCode() {
    // "this" is shadowed by cheerio
    const self = this;
    const $ = cheerio.load(self.content);
    const pres = $('pre');
    pres.each(function(idx, el) {
      const tcStr = $(el).text();
      const inputAt = tcStr.indexOf('Input');
      if (inputAt < 0) {
        return;
      }
      const outputAt = tcStr.indexOf('Output');
      const explanationAt = tcStr.indexOf('Explanation');
      // input
      let input = tcStr.substring(inputAt + 5, outputAt);
      input = input.trim().replace(/^:/, '');
      input = input.replace('\n', ', ');
      // remove first name
      let equalAt = input.indexOf('=');
      input = input.substring(equalAt + 1);
      equalAt = input.indexOf('=');
      while (equalAt > 0) {
        let commaAt = equalAt - 1;
        while (input[commaAt] !== ',') {
          commaAt--;
        }
        input = input.substring(0, commaAt + 1) + input.substring(equalAt + 1);

        equalAt = input.indexOf('=');
      }

      // output
      let output =
        explanationAt === -1 ?
          tcStr.substring(outputAt + 6) :
          tcStr.substring(outputAt + 6, explanationAt);
      output = output.trim().replace(/^:/, '');
      self.testCases.push({
        input,
        output,
      });
    });

    for (let i = 0; i < self.testCases.length; i++) {
      self.testCaseCode += `    it('${self.id}. ${i + 1}', () => {test(${
        self.testCases[i].input
      }, ${self.testCases[i].output})});\n`;
    }
  }

  generateCode() {
    this.code = `
/* eslint-disable max-len */
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

${this.functionCode}

${this.testFunctionCode}

describe('${this.id}. ${this.title}', () => {
${this.testCaseCode}   
});
`;
  }

  async writeFile() {
    await fs.writeFile(`test/${this.id}. ${this.title}.test.js`, this.code);
  }

  async process() {
    this.buildHeaders();
    await this.scrapQuestion();
    this.parseFunctionCode();
    this.parseTestCaseCode();
    this.generateTestFunctionCode();
    this.generateCode();
    await this.writeFile();
  }
}

let titleSlug = 'design-tic-tac-toe';
let type = '';
if (process.argv.length >= 3) {
  titleSlug = process.argv[2];
  titleSlug = titleSlug.replace('/submissions/', '');
  titleSlug = titleSlug.replace(/https:\/\/leetcode.(com|cn)\/problems\//, '');
  titleSlug = titleSlug.replace(
    /https:\/\/leetcode.com\/contest\/weekly-contest-\d+\/problems\//,
    '',
  );
  titleSlug = titleSlug.replace('/', '');
}
if (process.argv.length >= 4) {
  type = process.argv[3].toUpperCase();
}
const scraper = new Scraper(titleSlug, type);
scraper
  .process()
  .then((_) => {
    console.log('done');
  })
  .catch((err) => {
    console.log(err);
  });
