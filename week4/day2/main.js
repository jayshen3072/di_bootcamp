
const logfamilyage = (myAge) => {

    const mumage = myAge * 2;

    return mumage;

    logfamilyage();

};

const twiceage = logfamilyage(30);

console.log(twiceage);




//deconstruction -  what your function watch you tube//

let person= {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}
person.eat()
