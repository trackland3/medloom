//navbar color change ----------------------------------------------------------

const heighty = window.innerHeight
console.log(heighty);
window.addEventListener('scroll', (e) => {
    const scrolly = window.scrollY
    if (scrolly > 200) {
        document.getElementById("navbar").style.backgroundColor = '#ffffff'
    } else {
        document.getElementById("navbar").style.backgroundColor = '#85bce100'
    }
})

//navbar color change ----------------------------------------------------------

//responsive navbar ------------------------------------------------------------

const navbox = document.getElementById("navbox") 

document.getElementById("logo").addEventListener("click", () => {
    navbox.classList.toggle('active')
    if (navbox.style.right === "-200px") {
    navbox.style.right = '0px'
    console.log('hello');
  } else {
    navbox.style.right = '-200px'
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