//the rotating image

// let headImage = document.querySelector("#scroller-image");
// let openingTitle = document.querySelector(".opening");

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


function changeImage() {
    let i = 1;
    var timer = setInterval(updateImage, 600);

    function updateImage(){
      let headImage = document.querySelector("#scroller-image"); 
        if (i < 6) {
          headImage.classList.add('reverse-fade'); 
          var newAnimation = headImage.cloneNode(true);     
          newAnimation.src = `./img/SVG/Asset${i}.svg`;
          headImage.parentNode.replaceChild(newAnimation, headImage);
          i++;
        } else if (i === 6){
          headImage.style.display = "none";
          addTitleImage();
          addTitleText();
          clearInterval(timer);
      }                    
    }
}

changeImage();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


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

//Learning-Tower gallery

function generateTowerImages (){
  let towerImages = [];
  for (let i=1; i <= 18; i++){
    towerImages.push(`./img/Learning Tower/IMG_${i}.jpg`);
    // console.log(towerImages);
  }
  return towerImages;
}

const imageUrls = generateTowerImages();
console.log(imageUrls);
let learningTowerGallery = document.querySelector(".learning-gallery");

for (let i=0; i <imageUrls.length; i++){
  let createImg = document.createElement('img');
  createImg.src= imageUrls[i];
  learningTowerGallery.appendChild(createImg);
}

//Top Button

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