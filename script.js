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
    if (navbox.style.right === "-200px") {
    navbox.style.right = '0px'
    document.getElementById("cont").style.filter = 'blur(5px)';
    console.log('hello');
  } else {
    navbox.style.right = '-200px'
    document.getElementById("cont").style.filter = 'blur(0px)';
    console.log('helloo');

  }

    
});


//responsive navbar ------------------------------------------------------------




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
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage; 
    scrollsect.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`

}

//horizontal scrolling ---------------------------------------------------------