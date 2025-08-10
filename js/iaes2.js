//  le javascript pour le popp-up

   const validsuccess = document.getElementById('valid-success')
   const linkssuccess = document.querySelector('.links-success')
   const success = document.querySelector('.success-info')
   
   validsuccess.addEventListener('click', ()=>{
      success.classList.add('my-class')
                })
     linkssuccess.addEventListener('click', ()=>{
      success.classList.remove('my-class')
                })


const Year  = document.querySelector(".year")
let date = new Date()
let full = date.getFullYear()

    Year.innerHTML=full