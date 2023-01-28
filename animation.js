 let projets = document.querySelector(".projets")
 let home = document.querySelector(".home")
 let competence = document.querySelector(".competence")

 // position du scroll

//  window.addEventListener('scroll',()=>{
    

//      const scrolled = window.scrollY;
//   console.log(scrolled);
//   })

home.addEventListener("click", function() {
     window.scrollTo(0,0);
    });
    
competence.addEventListener("click", function(event) {
     window.scrollTo(0,932);
     event.preventDefault()
    });

 projets.addEventListener("click", function(event) {
     window.scrollTo(0,2000);
     event.preventDefault()
    });