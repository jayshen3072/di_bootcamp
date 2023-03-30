
//Exercise No 1//

let favfood = 'salad';

let favmeal = 'breakfast';

let text1 = 'I have ';

let text2 = ' at every ';

let display = text1 + favfood + text2 + favmeal;

console.log(display);

//Exercise No 2: Series//

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

let sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;

console.log(sentence);

//Exercise No 2 Part II://
myWatchedSeries[2] = 'friends';
myWatchedSeries.push('One foot in the grave');
myWatchedSeries.shift();




console.log(myWatchedSeries);







//Exercise No 3://

let celsius = 24;
let fahrenheit = ((celsius/5)*9)+ 32;

let output = `${celsius} 0C is ${fahrenheit} o F`;

console.log(output);

//Exercise No 4: Guess The Answers #1//
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

console.log(3 + 4 + '5');

//Exercise No 5: Guess The Answers #1//
typeof(15)
// Prediction:integer
// Actual:number
console.log(typeof(15));

typeof(5.5)
// Prediction: number
// Actual:number
console.log(typeof(5.5));

typeof(NaN)
// Prediction: Not a Number
// Actual:number
console.log(typeof(NaN));

typeof('Hello')
// Prediction: string
// Actual:string
console.log(typeof('Hello'));

typeof('true')
// Prediction: string
// Actual:string
console.log(typeof('true'));

typeof(1 !=2)
// Prediction:true
// Actual: boolean
console.log(typeof(1 !=2));


"hamburger" + "s"
// Prediction: 
// Actual:hamburgers
console.log("hamburger" + "s");

"hamburger" - "s"
// Prediction: 
// Actual:NaN
console.log("hamburger" - "s");

"1" + "3"
// Prediction:13
// Actual
console.log("1" + "3");

"johnny" + 5
// Prediction:NaN
// Actual:johnny5
console.log("johnny" + 5);

"johnny" - 5
// Prediction:NaN
// Actual:NaN
console.log("johnny" - 5);

99 * "hello"
// Prediction:NaN
// Actual:Nan
console.log(99 * "hello");

1 != 1
// Prediction:false
// Actual:false
console.log(1 != 1);

1 == "1"
// Prediction: false
// Actual: true
console.log(1 == "1");

1 === "1"
// Prediction:false
// Actual
console.log(1 === "1");

//Exercise No 6: Guess The Answers #3//

