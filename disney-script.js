//content script that will iteract with page
console.log("disney content script: begin...");


//put all possible logo images in an array
var logos = [];
logos = ['logo1.png','logo2.png','logo3.png', 'logo4.png', 'logo5.png',
'logo6.png', 'logo7.png', 'logo8.png','logo9.png','logo10.png','logo11.png'];

//get a random image from our array
var image = function(){return logos[Math.floor(Math.random()*logos.length)]};
console.log(image());

//diana will write code to update the logo


//


console.log("disney content script: ...end");
