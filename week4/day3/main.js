



let sentence = 'Hello, World, in, a, frame,please';


const splitSentence = value => {
    let result = value.split(',');
    result = trimEAchWordsOfSentenceArray(result);
    return(result);
}

console.log(result);

const trimEAchWordsOfSentenceArray = arr => {

    return arr.map(str => {

            const trimedStr = str.trim();
            return trimedStr;
        })
    };

const words = splitSentence(sentence);





