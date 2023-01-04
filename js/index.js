let arr = [
   document.getElementById('b'),
   document.getElementById('e'),
   document.getElementById('r2'),
   document.getElementById('t'),
   document.getElementById('o2')
];
let cont=0;
window.onload = () =>{
   console.log('La pagina se ha cargado correctamente');
   aleatorio();
   cont=0;
}
function aleatorio(){
   /*ALeatorio entero "parseInt(Math.random()*(max-min+1)+min)" */
   arr.forEach( x => {
      x.setAttribute('style', `order: ${parseInt(Math.random()*(5)+2)};`)
   });
   verifica();
   cont++;
}
function verifica(){
   if(cont!=1 && cont!=0){
      let anterior = -1;
      let sw = true;
      for(let i = 0; i < arr.length; i++){
         let x = arr[i]
         let nn = parseInt(x.getAttribute('style').substring(7,8));
         if (nn >= anterior){
            anterior=nn;
         }else{
            sw=false;
            break;
         }
      }
      if(sw){
         alert(`Lo lograste en ${cont} intentos`);
         cont=0;
      }
   }
}