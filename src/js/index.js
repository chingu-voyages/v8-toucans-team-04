let navVisible = false;
function toggleNav(){
    let nav = document.getElementById("nav-side");
    let navButton = document.getElementById("nav-button");
    if (navVisible == false){
        console.log("nav on");
        nav.style.visibility = "visible";
        navButton.innerHTML = "×";
        navVisible = true;
    }else if(navVisible = true){
        console.log("nav off")
        nav.style.visibility = "collapse";
        navButton.innerHTML ="☰";
        navVisible =false;
    }
};

var contactVisible = false

document.querySelector("#contact-button").addEventListener('click', function() {
  var divInterface = document.querySelector("#contact-interface")

  if (contactVisible) {
    divInterface.style.visibility = "hidden"
    this.innerHTML = '<i class="fas fa-comment-alt fa-2x"></i>'
  } 
  else {
    divInterface.style.visibility = "visible"
    this.innerHTML = '<i class="fas fa-times fa-2x"></i>'
  } 

  contactVisible = !contactVisible
})
