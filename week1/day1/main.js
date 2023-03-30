

function myFunction() {
    alert('hello');
  }
  
  myFunction();
  // calls the function once

  const myNumber = Math.random();

  alert(myNumber);



  const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);