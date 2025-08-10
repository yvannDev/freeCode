   // le javascript pour le chargement de notre application
   const homeLoading = document.querySelector('.accueil-theme')
   setTimeout(()=>{
     homeLoading.style.display='none'
     homeLoading.style.transition='.5s'
   },1000)

 // le javascript pour gerer la resposiviter
 const hamburger = document.querySelector('.hammburger')
              const navMenu  = document.querySelector('.nav-menu')
              const navLink  = document.querySelectorAll('.nav-link')
                    hamburger.addEventListener('click',()=>{
                      mobileNav()
                    })
                    function mobileNav(){
                      hamburger.classList.toggle('active')
                      navMenu.classList.toggle('active')
                    }

                    navLink.forEach((navLin)=>{
                      navLin.addEventListener('click',()=>{
                        hamburger.classList.remove('active')
                        navMenu.classList.remove('active')
                      })
                    })


                    window.addEventListener('scroll',function(){
                      const header = document.querySelector('.s-header')
                      header.classList.toggle('sticky' , window.scrollY > 0)
                    })

// le code javascript pour controler les champs du formulaire
document.addEventListener('submit',(e)=>{
   const allfield = document.getElementsByTagName('input')
   // const pv = document.querySelector('.p-v')
   // const error = document.getElementById('pError')
      for(i=0;i<=allfield.length;i++){
         if(!allfield[i]==""){
          error="Veuillez compléter tout  les champs svp..."
         }

           
      }
         if (error) {
            e.preventDefault()
            document.getElementById('pError').innerHTML=error
             return false
         }
   })

          



                 // le js pour sliders

const mySlider = document.querySelectorAll('.myslider'),
dot = document.querySelectorAll('.dot')

counter=1

let timer = setInterval(autoSlide,8000)
function autoSlide(){
  counter+=1
  slidefun(counter)

}


function plusSlides(n){
  counter+=n
  slidefun(n)
  resetTimer()
}


function  curentSlide(n){
  counter=n
  slidefun(counter)
  resetTimer()
}

function resetTimer(){
clearInterval(timer)
timer = setInterval(autoSlide,8000)
}




function slidefun(n){
  let i

for(i=0;i<mySlider.length;i++){
 mySlider[i].style.display="none"
}

for(i=0;i<dot.length;i++){
 dot[i].classList.remove('active')
}


if(n>mySlider.length){
  counter=1
}

if(n<1){
  counter=mySlider.length
}
mySlider[counter -1].style.display="block"
dot[counter -1].classList.add('active')
}