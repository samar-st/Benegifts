function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// after clicking category button. all div elements hidden

function myFunction() {
  //  Offcanvas section
  var x = document.getElementById("myDropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  // Call section
  let call_items = document.getElementById("call-section");
  if (call_items.style.display === "none") {
    call_items.style.display = "block";
  } else {
    call_items.style.display = "none";
  }
  // Medium content
  let md_items = document.getElementById("medium-content");
  if (md_items.style.display === "none") {
    md_items.style.display = "block";
  } else {
    md_items.style.display = "none";
  }
  // Footer
  let footer_items = document.getElementById("footer");
  if (footer_items.style.display === "none") {
    footer_items.style.display = "block";
  } else {
    footer_items.style.display = "none";
  }
  // Change bar icon to close icon
  let icon = document.getElementById("icon1");
  if (icon.className == "fa-solid fa-bars") {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
}

// 2
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide3(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementById("caption3");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// 1
function openModal() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal1").style.display = "none";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

function currentSlide(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("demo1");
  var captionText1 = document.getElementById("caption1");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";
  dots1[slideIndex1 - 1].className += " active";
  captionText1.innerHTML = dots1[slideIndex1 - 1].alt;
}

// 3
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4((slideIndex4 += n));
}

function currentSlide4(n) {
  showSlides4((slideIndex4 = n));
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("demo4");
  var captionText4 = document.getElementById("caption4");
  if (n > slides4.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides4.length;
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4 - 1].style.display = "block";
  dots4[slideIndex4 - 1].className += " active";
  captionText4.innerHTML = dots4[slideIndex4 - 1].alt;
}

// 4-modal
function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}

function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5((slideIndex5 += n));
}

function currentSlide5(n) {
  showSlides5((slideIndex5 = n));
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("demo5");
  var captionText5 = document.getElementById("caption5");
  if (n > slides5.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides5.length;
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5 - 1].style.display = "block";
  dots5[slideIndex5 - 1].className += " active";
  captionText5.innerHTML = dots5[slideIndex5 - 1].alt;
}

// 6-modal
function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}

function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}

var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6((slideIndex6 += n));
}

function currentSlide6(n) {
  showSlides6((slideIndex6 = n));
}

function showSlides6(n) {
  var i;
  var slides6 = document.getElementsByClassName("mySlides6");
  var dots6 = document.getElementsByClassName("demo6");
  var captionText6 = document.getElementById("caption6");
  if (n > slides6.length) {
    slideIndex6 = 1;
  }
  if (n < 1) {
    slideIndex6 = slides6.length;
  }
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6 - 1].style.display = "block";
  dots6[slideIndex6 - 1].className += " active";
  captionText6.innerHTML = dots6[slideIndex6 - 1].alt;
}

// 7-modal
function openModal7() {
  document.getElementById("myModal7").style.display = "block";
}

function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}

var slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7((slideIndex7 += n));
}

function currentSlide7(n) {
  showSlides7((slideIndex7 = n));
}

function showSlides7(n) {
  var i;
  var slides7 = document.getElementsByClassName("mySlides7");
  var dots7 = document.getElementsByClassName("demo7");
  var captionText7 = document.getElementById("caption7");
  if (n > slides7.length) {
    slideIndex7 = 1;
  }
  if (n < 1) {
    slideIndex7 = slides7.length;
  }
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  }
  for (i = 0; i < dots7.length; i++) {
    dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7 - 1].style.display = "block";
  dots7[slideIndex7 - 1].className += " active";
  captionText7.innerHTML = dots7[slideIndex7 - 1].alt;
}

// 8-modal
function openModal8() {
  document.getElementById("myModal8").style.display = "block";
}

function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}

var slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
  showSlides8((slideIndex8 += n));
}

function currentSlide8(n) {
  showSlides8((slideIndex8 = n));
}

function showSlides8(n) {
  var i;
  var slides8 = document.getElementsByClassName("mySlides8");
  var dots8 = document.getElementsByClassName("demo8");
  var captionText8 = document.getElementById("caption8");
  if (n > slides8.length) {
    slideIndex8 = 1;
  }
  if (n < 1) {
    slideIndex8 = slides8.length;
  }
  for (i = 0; i < slides8.length; i++) {
    slides8[i].style.display = "none";
  }
  for (i = 0; i < dots8.length; i++) {
    dots8[i].className = dots8[i].className.replace(" active", "");
  }
  slides8[slideIndex8 - 1].style.display = "block";
  dots8[slideIndex8 - 1].className += " active";
  captionText8.innerHTML = dots8[slideIndex8 - 1].alt;
}

// 9-modal
function openModal9() {
  document.getElementById("myModal9").style.display = "block";
}

function closeModal9() {
  document.getElementById("myModal9").style.display = "none";
}

var slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
  showSlides9((slideIndex9 += n));
}

function currentSlide9(n) {
  showSlides9((slideIndex9 = n));
}

function showSlides9(n) {
  var i;
  var slides9 = document.getElementsByClassName("mySlides9");
  var dots9 = document.getElementsByClassName("demo9");
  var captionText9 = document.getElementById("caption9");
  if (n > slides9.length) {
    slideIndex9 = 1;
  }
  if (n < 1) {
    slideIndex9 = slides9.length;
  }
  for (i = 0; i < slides9.length; i++) {
    slides9[i].style.display = "none";
  }
  for (i = 0; i < dots9.length; i++) {
    dots9[i].className = dots9[i].className.replace(" active", "");
  }
  slides9[slideIndex9 - 1].style.display = "block";
  dots9[slideIndex9 - 1].className += " active";
  captionText9.innerHTML = dots9[slideIndex9 - 1].alt;
}

// 10-modal
function openModal10() {
  document.getElementById("myModal10").style.display = "block";
}

function closeModal10() {
  document.getElementById("myModal10").style.display = "none";
}

var slideIndex10 = 1;
showSlides10(slideIndex10);

function plusSlides10(n) {
  showSlides10((slideIndex10 += n));
}

function currentSlide10(n) {
  showSlides10((slideIndex10 = n));
}

function showSlides10(n) {
  var i;
  var slides10 = document.getElementsByClassName("mySlides10");
  var dots10 = document.getElementsByClassName("demo10");
  var captionText10 = document.getElementById("caption10");
  if (n > slides10.length) {
    slideIndex10 = 1;
  }
  if (n < 1) {
    slideIndex10 = slides10.length;
  }
  for (i = 0; i < slides10.length; i++) {
    slides10[i].style.display = "none";
  }
  for (i = 0; i < dots10.length; i++) {
    dots10[i].className = dots10[i].className.replace(" active", "");
  }
  slides10[slideIndex10 - 1].style.display = "block";
  dots10[slideIndex10 - 1].className += " active";
  captionText10.innerHTML = dots10[slideIndex10 - 1].alt;
}

// 11-modal
function openModal11() {
  document.getElementById("myModal11").style.display = "block";
}

function closeModal11() {
  document.getElementById("myModal11").style.display = "none";
}

var slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
  showSlides11((slideIndex11 += n));
}

function currentSlide11(n) {
  showSlides11((slideIndex11 = n));
}

function showSlides11(n) {
  var i;
  var slides11 = document.getElementsByClassName("mySlides11");
  var dots11 = document.getElementsByClassName("demo11");
  var captionText11 = document.getElementById("caption11");
  if (n > slides11.length) {
    slideIndex11 = 1;
  }
  if (n < 1) {
    slideIndex11 = slides11.length;
  }
  for (i = 0; i < slides11.length; i++) {
    slides11[i].style.display = "none";
  }
  for (i = 0; i < dots11.length; i++) {
    dots11[i].className = dots11[i].className.replace(" active", "");
  }
  slides11[slideIndex11 - 1].style.display = "block";
  dots11[slideIndex11 - 1].className += " active";
  captionText11.innerHTML = dots11[slideIndex11 - 1].alt;
}

// 12-modal
function openModal12() {
  document.getElementById("myModal12").style.display = "block";
}

function closeModal12() {
  document.getElementById("myModal12").style.display = "none";
}

var slideIndex12 = 1;
showSlides12(slideIndex12);

function plusSlides12(n) {
  showSlides12((slideIndex12 += n));
}

function currentSlide12(n) {
  showSlides12((slideIndex12 = n));
}

function showSlides12(n) {
  var i;
  var slides12 = document.getElementsByClassName("mySlides12");
  var dots12 = document.getElementsByClassName("demo12");
  var captionText12 = document.getElementById("caption12");
  if (n > slides12.length) {
    slideIndex12 = 1;
  }
  if (n < 1) {
    slideIndex12 = slides12.length;
  }
  for (i = 0; i < slides12.length; i++) {
    slides12[i].style.display = "none";
  }
  for (i = 0; i < dots12.length; i++) {
    dots12[i].className = dots12[i].className.replace(" active", "");
  }
  slides12[slideIndex12 - 1].style.display = "block";
  dots12[slideIndex12 - 1].className += " active";
  captionText12.innerHTML = dots12[slideIndex12 - 1].alt;
}

// 13-modal
function openModal13() {
  document.getElementById("myModal13").style.display = "block";
}

function closeModal13() {
  document.getElementById("myModal13").style.display = "none";
}

var slideIndex13 = 1;
showSlides13(slideIndex13);

function plusSlides13(n) {
  showSlides13((slideIndex13 += n));
}

function currentSlide13(n) {
  showSlides13((slideIndex13 = n));
}

function showSlides13(n) {
  var i;
  var slides13 = document.getElementsByClassName("mySlides13");
  var dots13 = document.getElementsByClassName("demo13");
  var captionText13 = document.getElementById("caption13");
  if (n > slides13.length) {
    slideIndex13 = 1;
  }
  if (n < 1) {
    slideIndex13 = slides13.length;
  }
  for (i = 0; i < slides13.length; i++) {
    slides13[i].style.display = "none";
  }
  for (i = 0; i < dots13.length; i++) {
    dots13[i].className = dots13[i].className.replace(" active", "");
  }
  slides13[slideIndex13 - 1].style.display = "block";
  dots13[slideIndex13 - 1].className += " active";
  captionText13.innerHTML = dots13[slideIndex13 - 1].alt;
}

// Dileram && Postavshikam
// Modall
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("my2Modal")

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("my2Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}