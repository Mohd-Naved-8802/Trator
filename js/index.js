// MENU ACTIVE CODE START
function home(){
    document.getElementById("homeLink").classList.add("my-active");
    document.getElementById("aboutLink").classList.remove("my-active");
    document.getElementById("servicesLink").classList.remove("my-active");
    document.getElementById("vehiclesLink").classList.remove("my-active");
    document.getElementById("clientLink").classList.remove("my-active");
    document.getElementById("contactLink").classList.remove("my-active");
}

function about(){
    document.getElementById("aboutLink").classList.add("my-active");
    document.getElementById("homeLink").classList.remove("my-active");
    document.getElementById("servicesLink").classList.remove("my-active");
    document.getElementById("vehiclesLink").classList.remove("my-active");
    document.getElementById("clientLink").classList.remove("my-active");
    document.getElementById("contactLink").classList.remove("my-active");
}

function services(){
    document.getElementById("servicesLink").classList.add("my-active");
    document.getElementById("homeLink").classList.remove("my-active");
    document.getElementById("aboutLink").classList.remove("my-active");
    document.getElementById("vehiclesLink").classList.remove("my-active");
    document.getElementById("clientLink").classList.remove("my-active");
    document.getElementById("contactLink").classList.remove("my-active");
}

function vehicles(){
    document.getElementById("vehiclesLink").classList.add("my-active");
    document.getElementById("homeLink").classList.remove("my-active");
    document.getElementById("aboutLink").classList.remove("my-active");
    document.getElementById("servicesLink").classList.remove("my-active");
    document.getElementById("clientLink").classList.remove("my-active");
    document.getElementById("contactLink").classList.remove("my-active");
}

function client(){
    document.getElementById("clientLink").classList.add("my-active");
    document.getElementById("homeLink").classList.remove("my-active");
    document.getElementById("aboutLink").classList.remove("my-active");
    document.getElementById("servicesLink").classList.remove("my-active");
    document.getElementById("vehiclesLink").classList.remove("my-active");
    document.getElementById("contactLink").classList.remove("my-active");
}

function contact(){
    document.getElementById("contactLink").classList.add("my-active");
    document.getElementById("homeLink").classList.remove("my-active");
    document.getElementById("aboutLink").classList.remove("my-active");
    document.getElementById("servicesLink").classList.remove("my-active");
    document.getElementById("vehiclesLink").classList.remove("my-active");
    document.getElementById("clientLink").classList.remove("my-active");
}

// SELECT CODE
$(document).ready(function() {
    $('select').niceSelect();
  });

// FOR COUNTER
  $('.counter').counterUp({
    delay: 10,
    time: 3000
});

