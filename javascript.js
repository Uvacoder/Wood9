
//Header animation
function changeImage() {
    let i = 1;
    var timer = setInterval(updateImage, 600);

    function updateImage(){
      let headImage = document.querySelector("#scroller-image"); 
        if (i < 6) {
          headImage.classList.add('reverse-fade'); //CSS class that adds fade animation
          var newAnimation = headImage.cloneNode(true); //JS oddity, must remove and clone in order to allow css animation to start again
          newAnimation.src = `./img/SVG/Asset${i}.svg`; //Grabbing the images for the animation
          headImage.parentNode.replaceChild(newAnimation, headImage);
          i++;
        } else if (i === 6){ //Once all images have elapsed, hide and run the function that shows final image and text
          headImage.style.display = "none";
          addTitleImage();
          addTitleText();
          clearInterval(timer);
      }                    
    }
}

//Display the final image and text after animation plays
function addTitleImage(){
  var titleImage = document.createElement('img');
  titleImage.src="./img/main_image.png"
  let bigFurniture = document.getElementById("scroller-image-solid").appendChild(titleImage);
  bigFurniture.classList.add("img-fluid","d-block","mx-auto","image-size", "reverse-fade");
}

function addTitleText (){
  let titleText = document.querySelector('.opening');
  titleText.style.display = "block";
  titleText.classList.add("head-animation", "text-center", "text-wrap");
}


changeImage();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//dot control
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Table slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}  

//Tower Array Number change
let radioRoughLumber = document.getElementById("flexRadioDefault1");
let radioJointCut = document.getElementById("flexRadioDefault2");
let radioDryAssembly = document.getElementById("flexRadioDefault3");
let radioGlue = document.getElementById("flexRadioDefault4");
let radioApproval= document.getElementById("flexRadioDefault5");
let towerStartIndex = 0;
let towerEndIndex = 0;
let towerArr = [towerStartIndex, towerEndIndex];
console.log(towerArr);

radioRoughLumber.addEventListener('click', towerOne);
radioJointCut.addEventListener('click', towerTwo);
radioDryAssembly.addEventListener('click', towerThree);
radioGlue.addEventListener('click', towerFour);
radioApproval.addEventListener('click', towerFive);

//Remove previous pictures so new ones can fill
function removeTowerImages (){
    while (learningTowerGallery.firstChild){
    learningTowerGallery.removeChild(learningTowerGallery.firstChild);
  }
}


//Filling the array index based on clicked button
function towerOne(){
  removeTowerImages();
  towerStartIndex=1;
  towerEndIndex=2;
  towerArr = [towerStartIndex, towerEndIndex];
  fillingTowerImages();  

}



function towerTwo(){
  removeTowerImages();
  towerStartIndex=3;
  towerEndIndex=4;
  towerArr = [towerStartIndex, towerEndIndex];
  fillingTowerImages();
}

function towerThree(){
  removeTowerImages();
  towerStartIndex=5;
  towerEndIndex=14;
  towerArr = [towerStartIndex, towerEndIndex];
  fillingTowerImages();
}

function towerFour(){
  removeTowerImages();
  towerStartIndex=15;
  towerEndIndex=17;
  towerArr = [towerStartIndex, towerEndIndex];
  fillingTowerImages();
}

function towerFive(){
  removeTowerImages();
  towerStartIndex=18;
  towerEndIndex=18;
  towerArr = [towerStartIndex, towerEndIndex];
  fillingTowerImages();
}


//Learning-Tower gallery. Radio buttons determin which index to start and stop the array which is filled below by the template literal string for image links
function generateTowerImages (){
  let towerImages = [];
  for (let i = towerArr[0]; i <= towerArr[1]; i++){
    towerImages.push(`./img/Learning Tower/IMG_${i}.jpg`);
  }
  return towerImages;
}

let learningTowerGallery = document.querySelector(".learning-gallery");


//on load display first radio selection
towerOne();

function fillingTowerImages (){
  const imageUrls = generateTowerImages();

  for (let i=0; i <imageUrls.length; i++){
    let createImg = document.createElement('img');
    createImg.src= imageUrls[i];
    learningTowerGallery.appendChild(createImg);
    createImg.classList.add("zoom");
    learningTowerGallery.classList.remove("zoom");
  }
}


//Back to Top Button
topButton = document.getElementById("main-btn");
window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', topFunction);


