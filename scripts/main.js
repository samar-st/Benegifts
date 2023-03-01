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
  // Slider
  let slayder = document.getElementById("slider");
  if (slayder.style.display === "none") {
    slayder.style.display = "block";
  } else {
    slayder.style.display = "none";
  }
  // Product items
  let pr_items = document.getElementById("product-container");
  if (pr_items.style.display === "none") {
    pr_items.style.display = "block";
  } else {
    pr_items.style.display = "none";
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
    icon.className = "fa-solid fa-xmark"
  } else { 
    icon.className = "fa-solid fa-bars"
  }
   


  // Call section
  let endd = document.getElementById("ender");
  if (endd.style.display === "none") {
    endd.style.display = "block";
  } else {
    endd.style.display = "none";
  }

   // Call section
   let med = document.getElementById("medium");
   if (med.style.display === "none") {
      med.style.display = "block";
   } else {
     med.style.display = "none";
   }

}


// Modall
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("my2Modal")

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("my2Btn");

var btnVertical = document.getElementById("myBtnVertical");
var btn2Vertical = document.getElementById("my2BtnVertical");

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
// When the user clicks the button, open the modal  (2)
btnVertical.onclick = function() {
  modal.style.display = "block";
}
btn2Vertical.onclick = function() {
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

// 
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});


// Catalog tovarov in Mobile 
// Catalog tovarov
function myCatalogyDrop() {
  document.getElementById("catalogyy-tovarov").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button-catalogg')) {
    var dropdowns = document.getElementsByClassName("ct-tovar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// accordion
// ---- ---- Const ---- ---- //
const accordionContent = document.querySelectorAll('.accordion-content');

// ---- ---- Class .open ---- ---- //
accordionContent.forEach((item, index) => {
  let header = item.querySelector('.header');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    // ---- ---- Height Description and Change Icon ---- ---- //
    let description = item.querySelector('.description');
    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
      description.style.height = '0px';
      item.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      let descr = item2.querySelector('.description');
      descr.style.height = '0px';
      item2.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
  });
}

// default open after clicking button
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").focus();
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("header").click();
