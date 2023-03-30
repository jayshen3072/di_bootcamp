
//Exercise No 1//
const people = ["Greg", "Mary", "Devon", "James"];

people [0]= "Tommy";

console.log(people);

people.push("Jayshen");

console.log(people);

console.log(people.indexOf("Mary"));



let newarray = people.slice(1,3);

console.log(newarray);

let foo = people.indexOf("Foo");
console.log(foo);

let last = people[4];
console.log(last);


for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

people[2]="Jason"
console.log(people);

for (let i = 0; i < people.length; i++) {
    if (i === 2) { 
        break;
      }
    console.log(people[i]); 
  }


  //Exercise No 2//

  const colors=["red", "yellow", "blue","green", "gray"];

  for (let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}
