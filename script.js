
//preloader --------------------------------------------------------------------

const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

//preloader --------------------------------------------------------------------


//lenis scroll -----------------------------------------------------------------

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


const logo = document.querySelectorAll('.logo')
const landpage = document.querySelectorAll('.landpage')
const heading = document.querySelectorAll('.heading')

const containers = document.querySelectorAll('.svc-container')

gsap.from(logo, {
  y: -100,
  ease: 'power2.out',
  duration: 0.7,
})

gsap.from(".navlink", {
  y: -50,
  ease: 'power2.out',
  duration: 0.5,
  stagger: 0.05

})

gsap.from(".login", {
  y: -100,
  ease: 'power2.out',
  duration: 0.7,

})

gsap.from(".qaccess", {
  x: -100,
  ease: 'power2.out',
  duration: 0.7,

})

gsap.from(".heading", {
  x: -100,
  ease: 'power2.out',
  duration: 0.7,
  stagger: 0.5

})

gsap.from(".emgnzbox", {
  opacity: 0,
  y: 50,
  ease: 'power2.out',
  duration: 0.7

})


  gsap.set(heading, { 
    y: 0,
    // opacity: 0,
  })

  gsap.to(heading, {
    scrollTrigger: {
      trigger: landpage,
      start: 'top top',
      end: 'bottom 40%',
      markers: false,
      scrub: true
      
    },
    scale:0.9,
    y: 100,
    // opacity: 1
  })

    gsap.set(".shead", { 
    y: 40,
    opacity: 0,
  })

  gsap.to(".shead", {
    scrollTrigger: {
      trigger: ".sheader",
      start: 'top 90%',
      end: 'bottom 60%',
      markers: false,
      repeat: false,
      scrub: true
      
    },
    y: 0,
    opacity: 1
  }) 

    gsap.set(".sheadshadow", { 
    opacity: 0,
  })

  gsap.to(".sheadshadow", {
    scrollTrigger: {
      trigger: ".sheader",
      start: 'top 90%',
      end: 'bottom 60%',
      markers: false,
      scrub: true
      
    },
    opacity: 1
  }) 





containers.forEach(container => {

  const svcwrapper = container.querySelectorAll('.svcwrapper')
  const svcphoto = container.querySelectorAll('.svcphoto')

  
  gsap.set(svcwrapper, { 
    x: -100,
    opacity: 0,
  })

  gsap.to(svcwrapper, {
    scrollTrigger: {
      trigger: container,
      start: 'top 90%',
      end: 'bottom 70%',
      markers: false,
      repeat: false,
      scrub: true
      
    },
    x: 0,
    opacity: 1
  })    


  gsap.set(svcphoto, { 
    x: 100,
    opacity: 0,
  })

  gsap.to(svcphoto, {
    scrollTrigger: {
      trigger: container,
      start: 'top 90%',
      end: 'bottom 70%',
      markers: false,
      repeat: false,
      scrub: true
      
    },
    x: 0,
    opacity: 1
  }) 

});

gsap.set(".extrbox", { 
    y: 50,
    opacity: 0,
  })

  gsap.to(".extrbox", {
    scrollTrigger: {
      trigger: ".extrsvc-wrapper",
      start: 'top 90%',
      end: 'bottom 70%',
      markers: false,
      scrub: true
      
    },
    y: 0,
    opacity: 1
  })












// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

//lenis scroll -----------------------------------------------------------------


//navbar color change ----------------------------------------------------------

const heighty = window.innerHeight
console.log(heighty);
window.addEventListener('scroll', (e) => {
    const scrolly = window.scrollY
    if (scrolly > 100) {
        document.getElementById("navb").style.backgroundColor = '#ffffff'
    } else {
        document.getElementById("navb").style.backgroundColor = '#85bce100'
    }
    if (scrolly > 100) {
        document.getElementById("navba").style.backgroundColor = '#ffffff'
    } else {
        document.getElementById("navba").style.backgroundColor = '#85bce100'
    }
    
})

//navbar color change ----------------------------------------------------------

//responsive navbar ------------------------------------------------------------

const navbox = document.getElementById("navbox") 

document.getElementById("logo").addEventListener("click", () => {
    navbox.classList.toggle('active')
    if (navbox.style.right === "-300px") {
    navbox.style.right = '0px'
    document.querySelector('.main').style.filter = 'blur(5px)';
    console.log('hello');
  } else {
    navbox.style.right = '-300px'
    document.querySelector('.main').style.filter = 'blur(0px)';
    console.log('helloo');

  }

    
});


//responsive navbar ------------------------------------------------------------


//scroll --

//horizontal scrolling ---------------------------------------------------------

const hscroll = [...document.querySelectorAll('.sticky')]
// console.log(hscroll);


window.addEventListener('scroll'   , (e) => {
    for (let i = 0; i < hscroll.length; i++) {
        transform(hscroll[i])
        
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    // console.log(offsetTop);
    const scrollsect = section.querySelector('.scrollsect')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    // console.log(window.scrollY);
    // console.log(percentage);
    percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage; 
    scrollsect.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`

}

//horizontal scrolling ---------------------------------------------------------

//scroll reveal ----------------------------------------------------------------

const scrollTriggers = document.querySelectorAll("[scrollTrigger]");

const scrollTrigger = function () {
  for (let i = 0, len = scrollTriggers.length; i < len; i++) {
    if (scrollTriggers[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      scrollTriggers[i].classList.add("trigger");
    } else {
      scrollTriggers[i].classList.remove("trigger");
    }
  }
}

window.addEventListener("scroll", scrollTrigger);

window.addEventListener("load", scrollTrigger);




const currentDate = new Date();
 
const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();

const formattedDateTime = `${hours}:${minutes} ${day}${month}${year}`;

document.getElementById("datetime").innerHTML = formattedDateTime;

setInterval(() => {
  const currentDate = new Date();
 
const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');
const seconds = currentDate.getSeconds().toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const monthindex = (currentDate.getMonth());
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const year = currentDate.getFullYear().toString();

const formattedDateTime = `${day}\-${month[monthindex]}\-${year}, ${hours}:${minutes}`;

document.getElementById("datetime").innerHTML = formattedDateTime;
}, 1000);