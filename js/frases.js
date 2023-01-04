let variable = document.getElementsByClassName('card');
for(let i = 0; i < variable.length; i++){
   let element = variable[i];
   element.addEventListener("click", () =>{
      let frente = element.childNodes[1];
      let reves = element.childNodes[3];
      if(frente.style.transform=="rotateY(180deg)"){
         frente.style.transform="rotateY(0deg)";
         reves.style.transform="rotateY(180deg)";
      }else{
         frente.style.transform="rotateY(180deg)";
         reves.style.transform="rotateY(360deg)";
      }

   })
}
