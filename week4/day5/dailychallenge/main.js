let sentence = 'Hello, World, in, a, frame,please';

let answer = prompt('Enter number');

console.log(answer);

console.log(answer );

let answerInteger = parseInt(answer);



/*for (let i = 0; i < numArray.length; i--) {
    if (largest < numArray[i] ) {
        largest = numArray[i];
    }
}*/

let sentenceone = 'bottles of beer on the wall\n';

let sentenceTwo = 'bottles of beer\n';

let sentenceThree = 'Take 1 down, pass it around\n';

let sentenceFour = 'XX bottles of beer on the wall';


let n=0;
while (n<3){
    n++;
    console.log(n)
}

let i = answerInteger;
do {
    console.log(+i+' '+ sentenceone  +i+ sentenceTwo + ' '+ sentenceThree + ' '+sentenceFour );
  i--;
}
while (i > 1);


