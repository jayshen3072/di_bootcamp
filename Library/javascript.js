
//while loop. start with 0, then check if i is less than 5, if yes, then add 1 to i, display new i, then repeat till i is 5 and stop
function countWhile () {
let i = 0;

while (i < 5) {
  console.log(i);
  
  i++;
}
};

//Do while Loop : same as above but needs to be executed at lest once
let x = 0;
let i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5)


//for loop
for (let i = 0; i < 4; i += 1) {
    console.log(i);
  }

  //for ....of loop: iterates arrays of elements / string of characters / a map of key value pairs
  const items = ['apple', 'banana', 'cherry'];

  for (const item of items) {
    console.log(item);
  }

  //for  ....in loop iterates over any object with string type keys
  const shoppingCart = { banana: 2, apple: 5, cherry: 0 };

for (const fruit in shoppingCart) {
  console.log(fruit);
}

//or

const shoppingCart = { banana: 2, apple: 5, cherry: 0 };

for (const fruit in shoppingCart) {
  console.log(shoppingCart[fruit]);
}

//Reverse Loop FOR:
const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

// Looping through arrays
const fish = ['salmon', 'clown', 'whiting'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
}

//looping through objects
const objectK = {
    name: 'Codecademy',
    age: 10,
  };
  
  const myEntries = Object.entries(objectK);
  
  console.log(myEntries);

  //break Keyword is used to exit the loop when i is greater than 5
  for (let i = 0; i < 99; i += 1) {
    if (i > 5) {
      break;
    }
    console.log(i);
  }



  //FUNCTIONS
  function sum(number1, number2) {
    console.log(number1 + number2);
  }

  //calling functions
  // Defining the function
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function
  sum(2, 4);


  //return keyword
  // With return
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Without return, so the function doesn't output the sum
  function sum(num1, num2) {
    num1 + num2;
  }


  //callbacks
  function doubleResult(num1, num2, calc) {
    return calc(num1, num2) * 2;
  }
  
  function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  console.log(doubleResult(4, 2, add));
  console.log(doubleResult(4, 2, multiply));



  //CONDITIONALS
  //IF statement
  const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient 💌');
}


//Else statement
const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}

//another example
if (hour < 18) {
    greeting = 'Good day 🌤';
  } else {
    greeting = 'Good evening 🌙';
  }
  
  //else if statement
  if (time < 10) {
    greeting = 'Good morning 🌄';
  } else if (time < 20) {
    greeting = 'Good day 🌁';
  } else {
    greeting = 'Good evening 🌉';
  }



  //Events in HTML than can trigger javascript code

  //in html
<button id="hello-button">Click Me!</button>

//in javascript
// Clicking the "hello-button" button pops up a "Hello World!" dialog box
var btn = document.getElementById('hello-button');

btn.addEventListener('click', () => {
  window.alert('Hello World!');
});
  







