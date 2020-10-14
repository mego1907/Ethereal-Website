// Add Class Active in NavItem
const NavbarItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link'); // NavLink

for(let i = 0; i < NavbarItems.length; i++) {
    NavbarItems[i].addEventListener('click', () => {
        NavbarItems.forEach((e) => e.classList.remove('active'))
        NavbarItems[i].classList.add('active');
    })
}


// Slider
const sliderContainer = document.getElementById('slider-inner'); // Slider-inner
const sliderItem = document.querySelectorAll('.slider-item'); // Slider-item
const points = document.querySelectorAll('.points ul li'); // Li 

let sliderWidth = sliderItem[0].clientWidth; // Slider Width
let counter = 1; // Counter

console.log(sliderWidth)

setInterval(() => {
    points.forEach((e) => e.classList.remove('active'))
    points[counter].classList.add('active');

    sliderContainer.style.transform = 'translateX(' + (-sliderWidth * counter) + 'px)'
    sliderContainer.style.transition = "all 0.4s ease-in-out";
    counter++;

    if(counter >= sliderItem.length) {
        //counter = 0;
        counter -= counter;
    }
}, 2500)

function sliderPoints(index) {
    sliderContainer.style.transform = 'translateX(' + (-sliderWidth * index) + 'px)'
    sliderContainer.style.transition = "all 0.4s ease-in-out";
}

for(let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', () => {
        points.forEach((e) => e.classList.remove('active'))
        points[i].classList.add('active')
    })
}


// Counters
const counters = document.querySelectorAll('.about .about-counters .counter span'); // Counters
const aboutSec = document.querySelector('.about'); // About Section

let aboutTop = aboutSec.offsetTop - 500; // About Section Top

document.addEventListener('scroll', () => { 
    if(document.documentElement.scrollTop >= aboutTop) {
        setInterval(() => {
            if(counters[0].innerHTML < 55){
                counters[0].innerHTML++;
            }
            if(counters[1].innerHTML < 88){
                counters[1].innerHTML++;
            }
        } ,300)
    } else{
        counters[0].innerHTML = 0; 
        counters[1].innerHTML = 0;
    }
})


/* // Add Class Active When I Make Scroll
document.addEventListener('scroll', () => {

}) */