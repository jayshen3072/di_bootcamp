

const solarSystem = ["mercury","venus","march","jupiter","saturn","uranus","neptune","earth"];




for (i = 0; i < solarSystem.length; i++) {

    const div = document.createElement('div');
    div.className = (solarSystem[i]);
    div.innerHTML = (solarSystem[i]);
   document.body.appendChild(div);
   
   function changeStyle(){
    div.style.backgroundColor = "lightblue"
   
   }



    console.log(div);
  }




  

