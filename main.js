// Dung cho Phone

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


//Dung cho PC
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");


//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 5;
let maxLocation =  numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";    
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch  (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;   
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook();
                break;

            default:
                throw new Error("Unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch  (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
           
            default:
                throw new Error("Unkown state");
        }
        currentLocation--;
    }
}