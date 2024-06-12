//variables de la gestion du voir plus
const voirplusa = document.getElementById('voir-plus-propos-voir')
const voirplusb = document.getElementById('voir-plus-propos-hidden')
const proposhidden = document.getElementById('propos-hidden')

//variables de la gestion des diapos



//gestion du voir plus
voirplusa.addEventListener('click', () => {
   proposhidden.style.display = 'block'
   voirplusa.style.display = 'none'
  });
voirplusb.addEventListener('click', () => {
    proposhidden.style.display = 'none'
    voirplusa.style.display = 'block'
   });

// //gestion des diapos
// const slider = document.querySelectorAll("#diapo")
// const size = slider[0].clientWidth

// let counter =0


// const prev = document.getElementById("prev")
// const next = document.getElementById("next")
// const diapos = document.getElementById("diapos")
// console.log("counter",counter)
// console.log("size*counter",size*counter)

// next.addEventListener("click", (e)=>{
//     counter++;
    
//     if(counter>=0 && counter<=3){
//         diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
//     }else{
//         counter--;
//     }
// })
// prev.addEventListener("click",()=>{
//     /* if(counter>0){
         
      
//         counter-=2
//         if(counter<0)
//           {
//             counter = 0
//           }
//         diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
//         console.log("size*counter",size*counter)
//         console.log("counter",counter)
//     } */
//     counter--;
//     if(counter>=0 && counter<=3){
//         diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
//     }else{
//         counter++;
//     }
// })


//gestion des produits
const produit1 = document.getElementById('produit1')
const produit2 = document.getElementById('produit2')
const produit3 = document.getElementById('produit3')
const produit4 = document.getElementById('produit4')
produit1.addEventListener('click', function() {
    const url = "/"// Get the URL from the link element
    window.location.href = url // Open the URL in the browser
  })
produit2.addEventListener('click', function() {
    const url = "nos_services.html"// Get the URL from the link element
    window.location.href = url // Open the URL in the browser
  })

produit3.addEventListener('click', function() {
    const url = "nos_produits.html#chia"// Get the URL from the link element
    window.location.href = url // Open the URL in the browser
  })
produit4.addEventListener('click', function() {
    const url = "nos_produits.html#sauber"// Get the URL from the link element
    window.location.href = url // Open the URL in the browser
  })