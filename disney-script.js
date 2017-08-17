//content script that will iteract with page
console.log("disney content script: begin...");
var newTabPathName = "/_/chrome/newtab"; 
var googlePathName = "/"; 

if (window.location.pathname === newTabPathName || window.location.pathname === googlePathName){
//IMAGES URL HERE
var logo1 = "https://lh3.googleusercontent.com/RVtwSeu8ZWL-IjY0o6IVDzjQ01BEqNBGUFn0n73enrORfVFmpK6AGHFDWZ2nYKMGXIaI4FXBHqMvPah36UvPiTq3b2i0EZ1uIR377Aw=s660"; 
//var logo2 = 
//put all possible logo images in an array
// var logos = [];
// logos = ['logo1.jpg','logo2.png','logo3.jpg', 'logo4.png', 'logo5.jpg',
// 'logo6.jpg', 'logo7.png', 'logo8.png','logo9.png','logo10.png','logo11.png'];

// var imageDiv = document.getElementById('lga'); 
// imageDiv.appendChild(images); 

//get a random image from our array
//var image = function(){return logos[Math.floor(Math.random()*logos.length)]};
// //console.log(image());

// //diana will write code to update the logo
var changeLogo = document.getElementById('hplogo');
//console.log(changeLogo);
//console.log(changeLogo.src = image()); 
var p = changeLogo.parentNode;
p.removeChild(changeLogo);  

var images = document.createElement('IMG'); 
images.id = 'hplogo';
images.setAttribute("src", "https://lh3.googleusercontent.com/RVtwSeu8ZWL-IjY0o6IVDzjQ01BEqNBGUFn0n73enrORfVFmpK6AGHFDWZ2nYKMGXIaI4FXBHqMvPah36UvPiTq3b2i0EZ1uIR377Aw=s660"); 
p.appendChild(images); 

//console.log(window.location.pathname); 
}


//
console.log("disney content script: ...end");
