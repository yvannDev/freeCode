
// js for hamburger
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navItems = document.querySelectorAll("nav-items");

hamburger.addEventListener("click",()=>{
    mobileNav()
})

const mobileNav=()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}


navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        removeMobile()
    })
})

const removeMobile =()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}

// js for  typed js 
const text =document.querySelector('.sec-typed')

const textLoad =()=>{
    setTimeout(() => {
       text.textContent="frontEnd developer" 
    }, 0);
    setTimeout(() => {
       text.textContent="backEnd developer" 
    }, 4000);
    setTimeout(() => {
       text.textContent="fullStack developer" 
    }, 8000);
}
textLoad()

setInterval(textLoad,12000)



// js for intersectionObserver

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("hidden")
        }else{
            entry.target.classList.remove("hidden")
 
        }
    })
})

const blogs = document.querySelectorAll(".blog-xl-mb")

blogs.forEach((blog)=>observer.observe(blog))

// js for carousel 
const contentCarou = document.querySelector(".container-fl-lo")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")


const isVisible =()=>{
    const scrolLeftWidth = Math.ceil(contentCarou.scrollLeft)
    const scrolLabWidth =contentCarou.scrollWidth-contentCarou.clientWidth

    prevBtn.style.display=scrolLeftWidth >0? "block":"none"
    nextBtn.style.display=scrolLabWidth >scrolLeftWidth ? "block":"none"
}


nextBtn.addEventListener("click",()=>{
    contentCarou.scrollLeft+=150

    setTimeout(()=>{
     isVisible()
    },1000)
})

prevBtn.addEventListener("click",()=>{
    contentCarou.scrollLeft-=150
    setTimeout(()=>{
        isVisible()
       },1000)
})

window.onload=function(){
prevBtn.style.display= contentCarou.scrollWidth>contentCarou.clientWidth|| contentCarou.scrollWidth>=window.innerWidth ?"block":"none"
// nextBtn.style.display=contentCarou.scrollWidth>=window.innerWidth?"":"none"
}

window.onresize=function(){
prevBtn.style.display= contentCarou.scrollWidth>contentCarou.clientWidth|| contentCarou.scrollWidth>=window.innerWidth ?"block":"none"
// nextBtn.style.display=contentCarou.scrollWidth>=window.innerWidth?"":"none"

}