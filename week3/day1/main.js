

let sentence = 'Hello, World, in, a, frame,please';


const splitSentence = value => {
    let result = value.split(',');
    result = trimEAchWordsOfSentenceArray(result);
    return(result);
}



const trimEAchWordsOfSentenceArray = arr => {

    return arr.map(str => {

            const trimedStr = str.trim();
            return trimedStr;
        })
    };

const words = splitSentence(sentence);

console.log('************');

let numArray = [];

for (const element of words){
    console.log('* '+ element+ ' *');
    let num = element.length;

    /*console.log(num);*/

    numArray.push(num);
    
/* console.log(numArray);*/

};
console.log('************');


let largest = numArray[0];


for (let i = 0; i < numArray.length; i++) {
    if (largest < numArray[i] ) {
        largest = numArray[i];
    }
}
/*console.log(largest);*/







