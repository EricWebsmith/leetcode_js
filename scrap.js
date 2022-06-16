const axios = require('axios').default;
const { headers } = require('./config');
const cheerio = require('cheerio');
const fs = require('fs').promises;

class Scraper {
    constructor(titleSlug, type) {
        this.title = '';
        this.id = '';
        this.titleSlug = titleSlug;
        this.type = type;
        this.codeDefinition = '';
        this.content = '';
        this.functoinCode = '';
        this.functionName = '';
        this.testFunctionCode = '';
        this.code = '';
        this.testCases = [];
        this.testCaseCode = '';
    }

    async scrapQuestion() {
        const data = {
            "query": "\n            query getQuestionDetail($titleSlug: String!) {\n              question(titleSlug: $titleSlug) {\n                questionFrontendId\n                title\n                content\n                codeDefinition\n              }\n            }\n        ",
            "variables": {
                "titleSlug": this.titleSlug
            },
            "operationName": "getQuestionDetail"
        }

        const result = await axios.post(
            'https://leetcode.com/graphql',
            data, { headers }
        );

        const question = result.data.data.question;
        this.id = question.questionFrontendId;
        this.title = question.title;
        if (this.type === '' && this.title.startsWith('Design')) {
            this.type = 'Design';
        } else {
            this.type = 'Common';
        }
        this.content = question.content;
        this.codeDefinition = question.codeDefinition;
    }

    parseFunctionCode() {
        const codeDefinitionArray = JSON.parse(this.codeDefinition);

        /**
         * @type {string}
         */
        const javascriptObj = codeDefinitionArray.find(d => d.value == 'javascript');
        const javascript = javascriptObj.defaultCode;
        const varAt = javascript.indexOf('var');
        const equalAt = javascript.indexOf(' = ');
        this.functionName = javascript.substring(varAt + 4, equalAt);
        this.functionCode = javascript;
    }

    parseTestFunctionCode() {
        if (this.type === 'Design') {
            let input = this.testCases[0].input;
            const openAt = input.indexOf('[');
            const closeAt = input.indexOf(']');
            input = input.substring(openAt + 1, closeAt);
            input = input.replace(/"/g, '');
            input = input.replace(/, /g, ',');
            const actions = input.split(',')
            const actionSet = new Set();
            for (let i = 1; i < actions.length; i++) {
                actionSet.add(actions[i]);
            }

            let actionCode = '';
            for (const action of actionSet.values()) {
                actionCode += `
            case 'move':
                expect(obj.move(...params[i])).to.be.eql(expected[i]);
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
            this.testFunctionCode = `
function test(...args) {
    const expected = args.pop();
    const actual = ${this.functionName} (...args);
    if (actual !== expected) {
        console.log(actual, expected);
    }
    expect(actual).to.be.eql(expected);
}`
        }
    }

    parseTestCaseCode() {
        // this is shadowed by cheerio
        const self = this;
        const $ = cheerio.load(self.content);
        const pres = $("pre");
        pres.each(function (idx, el) {
            console.log($(el).text());
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
            let output = explanationAt === -1 ? tcStr.substring(outputAt + 6) : tcStr.substring(outputAt + 6, explanationAt);
            output = output.trim().replace(/^:/, '');
            self.testCases.push({
                input,
                output
            })
        });

        for (let i = 0; i < self.testCases.length; i++) {
            self.testCaseCode += `    it('${self.id}. ${i + 1}', () => {test(${self.testCases[i].input}, ${self.testCases[i].output})});\n`;
        }
    }

    parseCode() {
        this.code = `
const { expect } = require("chai");
const _ = require('lodash');
const { Queue } = require('@datastructures-js/queue');
const { Node, array2Node, node2Array, ListNode, array2ListNode, listNode2Array, TreeNode, array2TreeNode, treeNode2Array } = require('../leetcode')

${this.functionCode}

${this.testFunctionCode}

describe('${this.id}. ${this.title}', () => {
${this.testCaseCode}   
});
`
        console.log(this.code);
    }

    async writeFile() {
        await fs.writeFile(`test/${this.id}. ${this.title}.test.js`, this.code);
    }

    async process() {
        await this.scrapQuestion();
        this.parseFunctionCode();
        this.parseTestCaseCode();
        this.parseTestFunctionCode();

        this.parseCode();
        await this.writeFile();
    }
}

let titleSlug = 'design-tic-tac-toe';
let type = '';
if (process.argv.length >= 3) {
    titleSlug = process.argv[2];
    titleSlug = titleSlug.replace('https://leetcode.com/problems/', '');
    titleSlug = titleSlug.replace('/', '');
}
if (process.argv.length >= 4) {
    type = process.argv[3];
}
const scraper = new Scraper(titleSlug, type);
scraper.process().then(result => {
    //console.log(result);
}).catch(err => {
    console.log(err);
})