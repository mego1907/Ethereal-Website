// Slider

const sliderContainer = document.getElementById('slider-inner'); // Slider-inner
const sliderItem = document.querySelectorAll('.slider-item'); // Slider-item
const points = document.querySelectorAll('.points ul li');

let sliderWidth = sliderItem[0].clientWidth; 
let counter = 1;

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
