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


// openButton link
function openButton(evt, categoryName) {
  var i, tovarContent, descriptLink;
  tovarContent = document.getElementsByClassName("tovar-content");
  for (i = 0; i < tovarContent.length; i++) {
    tovarContent[i].style.display = "none";
  }
  descriptLink = document.getElementsByClassName("descript-link");
  for (i = 0; i < descriptLink.length; i++) {
    descriptLink[i].className = descriptLink[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("header").click();

  // hidden all content by clicking Category button
  
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

  // Catalog tovarov
  function myCatalogyDrop() {
    document.getElementById("catalogy-tovarov").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.button-catalog')) {
      var dropdowns = document.getElementsByClassName("catalog-tovarov");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }