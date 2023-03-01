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
  
  
  