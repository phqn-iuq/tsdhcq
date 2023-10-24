const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
// const slider = document.getElementById("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => toLeft());
btnRight.addEventListener("click", e => toRight());

// setInterval(()=>{
//     toRight()
// }, 10000);

let rong = 0;
let dem = 0;
let widthImg = 100 / sliderSection.length;

function toRight() {
    if(dem >= sliderSection.length-1){
        dem = 0;
        rong = 0;
        slider.style.transform = `translate(-${rong}%)`;
        slider.style.transition = "none";
        return;
    } 
    dem ++;
    rong = rong + widthImg;
    slider.style.transform = `translate(-${rong}%)`;
    slider.style.transition = "all ease .6s";
}

function toLeft() {
    dem--;
    if(dem < 0){
        dem = sliderSection.length - 1;
        rong = widthImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${rong}%)`;
        slider.style.transition = "none";
        return;
    } 
    rong = rong - widthImg;
    slider.style.transform = `translate(-${rong}%)`;
    slider.style.transition = "all ease .6s";
}



