

const sheet = document.forms.libform;
console.log(sheet);





const onSubmit = event => {
    event.preventDefault();



    const wordOne = sheet.elements.noun.value;
    const wordTwo = sheet.elements.adjective.value;
    const wordThree = sheet.elements.person.value;
    const wordFour = sheet.elements.verb.value;
    const wordFive = sheet.elements.place.value;

    let array = [wordOne, wordTwo, wordThree, wordFour, wordFive];

    console.log(array);
  
  


  document.getElementById("story").innerText += wordOne + " " + wordTwo + " "+ wordThree + " " + wordFour + " " + wordFive ;

}

sheet.addEventListener('submit', onSubmit);




