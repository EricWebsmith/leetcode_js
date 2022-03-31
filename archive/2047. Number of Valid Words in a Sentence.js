/**
 * @param {string} sentence
 * @return {number}
 */
 var countValidWords = function(sentence) {
    let words = 0;
    let valid = 1;
    let hypen_count = 0;
    for(let i = 0; i < sentence.length; i++){
        

        let c = sentence[i];
        

        
        switch(c){
            case ' ':
                if(i==0 || sentence[i-1] == ' '){
                    continue;
                }
                //console.log(sentence.slice(0, i+1));
                //console.log(i, valid);
                words += valid;
                valid = 1;
                hypen_count = 0;

                break;
            case ',':
            case '.':
            case '!':
                if(i+1<sentence.length && sentence[i+1] != ' '){
                    valid = 0;
                }
                break;
            case '-':
                if(i==0 || sentence[i-1]<'a' || sentence[i-1]>'z'){
                    valid = 0;
                }
                if(i==sentence.length-1 || sentence[i+1]<'a' || sentence[i+1]>'z'){
                    valid = 0;
                }
                hypen_count++;
                if(hypen_count > 1){
                    valid = 0;
                }
                break;
        }

        if(c>='0' && c<='9'){
            valid = 0;
        }
    }

    if(sentence[sentence.length-1] != ' '){
        words+=valid;
    }


    return words;
};

console.log(countValidWords("a-b-c"), 0);
console.log(countValidWords("I am a student, and I love to study."), 9);

console.log(countValidWords("cat and  dog"), 3)
console.log(countValidWords("I am a student."), 4);
console.log(countValidWords("-"), 0);
console.log(countValidWords("  ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf "), 0);
console.log(countValidWords("pencil-sharpener"), 1);