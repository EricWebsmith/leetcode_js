const axios = require('axios').default;
const { headers } = require('./config');
const cheerio = require('cheerio');

class Scraper {
    constructor(titleSlug) {
        this.title = '';
        this.id = '';
        this.titleSlug = titleSlug;
        this.type = 'Common';
        this.codeDefinition = '';
        this.content = '';
        this.functoinCode = '';
        this.functionName = '';
        this.testFunctionCode = '';
        this.code = '';
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
        this.content = question.content;
        this.codeDefinition = question.codeDefinition;
    }

    parseFunctionCode () {
        const codeDefinitionArray = JSON.parse(this.codeDefinition);

        /**
         * @type {string}
         */
        const javascriptObj = codeDefinitionArray.find(d=>d.value == 'javascript');
        const javascript = javascriptObj.defaultCode;
        console.log(javascript);
        const varAt = javascript.indexOf('var');
        const equalAt = javascript.indexOf(' = ');
        this.functionName = javascript.substring(varAt+4, equalAt);
        this.functionCode = javascript;
    }

    parseTestFunctionCode() {

    }

    parseTestCaseCode() {

        const $ = cheerio.load(this.content);
        const pres = $("pre");
        console.log(pres.length); // 2
        pres.each(function (idx, el) {
          console.log($(el).text());
        });


    }
 
    parseCode() {

    }

    async process() {
        await this.scrapQuestion();
        this.parseFunctionCode();
        this.parseTestFunctionCode();
        this.parseTestCaseCode();
        this.parseCode();
    }
}

const titleSlug = 'two-sum';
const scraper = new Scraper(titleSlug);
scraper.process().then(result=>{
    //console.log(result);
}).catch(err=>{
    console.log(err);
})