var navLink = document.getElementById("navLink");
var isOpen = false; // Variable to track the menu state

function showMenu() {
  if (isOpen) {
    navLink.style.top = ""; // Set it back to the default value (empty)
    isOpen = false; // Update the state
  } else {
    navLink.style.top = "100px"; // Set the new position when opening
    isOpen = true; // Update the state
  }
}

// Event listener to call the toggleMenu function on click
navLink.addEventListener("click", showMenu);


//javascript for alert
var alert = document.getElementById("alert");
isOpen = false;

function showAlert(){
  if(isOpen){
alert.style.display = "block";
isOpen = false;
}else{
  alert.style.display = "none";
  isOpen = true;
}
}

var content = document.getElementById("content");
var isOpen = false;

function show() {

  if(isOpen) {
    content.style.position  = "unset"; 
   isOpen = false;
  } else{
    content.style.position  = "absolute"; 
    isOpen = true;
  }
}



//var hero_content = document.getElementById("hero_content");

//hero_content.onclick() => {
    //hero_content.style.top="0px";
//}

function showIcon() {
    var heroContent = document.getElementById("hero_content");
    if (heroContent) {
        heroContent.style.top = "0px";
    }
}

//Click Function for Heading AD

var ad = document.getElementById("ad")

function adIcon(){
  ad.style.display = "none";
     console.log('Yes been clicked')
}