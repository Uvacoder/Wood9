//the rotating image

let headImage = document.querySelector("#scroller-image");
// let openingTitle = document.querySelector(".opening");

function addTitleImage(){
    var titleImage = document.createElement('img');
    titleImage.src="./img/main_image.png"
    let bigFurniture = document.getElementById("big-furniture").appendChild(titleImage);
    bigFurniture.classList.add("img-fluid","d-block","mx-auto");
}

function changeImage() {
    let i = 1;
    setInterval(function(){    
        if (i < 6) {        
            headImage.src = `./img/SVG/Asset${i}.svg`;
            // headImage.classList.add('fade');
            i++;
        } else if (i === 6){
            headImage.style.display = "none";
            // document.querySelector(".opening").style.display="block";
            addTitleImage();   
            i=8;
        }
    },400);

}

changeImage();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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