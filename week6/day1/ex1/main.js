




  let timer = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
  document.getElementsByClassName("counter").innerHTML = time;
}

function myStopFunction() {
  clearInterval(timer);
}

myTimer();