//exercise 1 simple if/else statement//
let x = 5
let y = 2

if (x > y) {
  console.log('x is the biggest number')
}

else
{
  console.log('x is not the biggest number')
  alert('x is not the biggest number')
}


//exercise 2 chihuahua//

let newDog = 'Chihuahua';
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog === 'Chihuahua') {
  alert('I love Chihiuahuas, its my favorite dog breed')

}
else{alert('I dont care, I prefer Cats')}

//Exercise 3: Even or Odd//

let userinput = prompt ('Please enter a number', 'enter number');


alert('You entered ' +userinput+ ' Thank you.');

if (userinput % 2 === 0 ){
  alert(+userinput+ ' is an even number')
}
else{
  alert(+userinput+ ' is an odd number')
};

//Exercise 4: Even or Odd//

const users =['user1', 'user2', 'user3','user4'];

if (users.length === 0){
  alert('No one is online')
}
else if (users.length === 1){
  alert(users[0]+ 'is online')
}
else if (users.length === 2){
  alert(users[0]+ 'and' ,users[1]+ 'is online')
}
else{
  alert(users[0]+ ' and' +users[1]+ ' and' (remaining) +  ' more are online')
};






