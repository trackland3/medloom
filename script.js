
//horizontal scrolling ---------------------------------------------------------

const hscroll = [...document.querySelectorAll('.sticky')]
console.log(hscroll);


window.addEventListener('scroll'   , (e) => {
    for (let i = 0; i < hscroll.length; i++) {
        transform(hscroll[i])
        
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop);
    const scrollsect = section.querySelector('.scrollsect')
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    console.log(window.scrollY);
    console.log(percentage);
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage; 
    scrollsect.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`

}

//horizontal scrolling ---------------------------------------------------------