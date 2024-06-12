const slider = document.querySelectorAll("#diapo")
const size = slider[0].clientWidth

let counter =0


const prev = document.getElementById("prev")
const next = document.getElementById("next")
const diapos = document.getElementById("diapos")
console.log("counter",counter)
console.log("size*counter",size*counter)

next.addEventListener("click", (e)=>{
    counter++;
    
    if(counter>=0 && counter<=1){
        diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
    }else{
        counter--;
    }
})
prev.addEventListener("click",()=>{
    /* if(counter>0){
         
      
        counter-=2
        if(counter<0)
          {
            counter = 0
          }
        diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
        console.log("size*counter",size*counter)
        console.log("counter",counter)
    } */
    counter--;
    if(counter>=0 && counter<=1){
        diapos.style.transform = " translateX(" +"-"+(size*counter) + "px)"
    }else{
        counter++;
    }
})