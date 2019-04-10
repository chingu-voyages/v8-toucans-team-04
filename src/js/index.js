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