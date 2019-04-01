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