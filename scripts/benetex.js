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
      icon.className = "fa-solid fa-xmark"
    } else { 
      icon.className = "fa-solid fa-bars"
    }
  }
  
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
  
  