//content script that will iteract with page
console.log("disney content script: begin...");
var newTabPathName = "/_/chrome/newtab";
var googlePathName = "/";

if (window.location.pathname === newTabPathName || window.location.pathname === googlePathName){

//IMAGES URL HERE
var logo1 = "https://lh3.googleusercontent.com/RVtwSeu8ZWL-IjY0o6IVDzjQ01BEqNBGUFn0n73enrORfVFmpK6AGHFDWZ2nYKMGXIaI4FXBHqMvPah36UvPiTq3b2i0EZ1uIR377Aw=s660";
var logo2 = "https://rebeccanicholeratliff.files.wordpress.com/2013/01/disney-facebookcover.jpg";
var logo3 = "https://s-media-cache-ak0.pinimg.com/736x/f4/6c/4a/f46c4af8bd526f632be370f3d875f139--facebook-profile-facebook-timeline.jpg";
var logo4 = "https://i1.wp.com/holidaysandobservances.net/wp-content/uploads/2015/09/tumblr_muxvjfmnun1rf73xqo10_1280.png";
//put all possible logo images in an array
var logos = [];
logos = [logo1, logo2, logo3, logo4]//, 'logo5.jpg',
// 'logo6.jpg', 'logo7.png', 'logo8.png','logo9.png','logo10.png','logo11.png'];

// var imageDiv = document.getElementById('lga');
// imageDiv.appendChild(images);

//get a random image from our array
var image = function(){return logos[Math.floor(Math.random()*logos.length)]};
// //console.log(image());

// //diana will write code to update the logo
var changeLogo = document.getElementById('hplogo');
//console.log(changeLogo);
//console.log(changeLogo.src = image());
var p = changeLogo.parentNode;
p.removeChild(changeLogo);

var images = document.createElement('IMG');
images.id = 'hplogo';
images.setAttribute("src", image());
p.appendChild(images);

//remove top sites
var removeSites = document.getElementById('mv-tiles');
$(removeSites).remove();
}

//add our own stuff
var ourDiv = $('<div></div>');
$(ourDiv).attr('id', 'newContent');

//apend ourDiv
var origDiv = document.getElementById('most-visited');
$(origDiv).append(ourDiv);

//GIF stuff here
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
		parseGiphy(this.responseText);
		//console.log(this.responseText);
	}
}

//parse through response text
function parseGiphy(response){
	var obj = JSON.parse(response);
	console.log(obj);
	var url = obj.data.embed_url
	console.log(obj.data.embed_url);
	var giphy = $('<iframe>', {
		src: url,
		frameborder: 0
	})


	$(ourDiv).append(giphy);
}

//Link stuff here
var linkDiv = $('<a></a>');
$(linkDiv).attr('href', 'http://www.disney.com/');
$(linkDiv).attr('id', 'disneyWeb');
$(origDiv).append(linkDiv);
//imageDiv for link
var linkImage = $('<img></img>');
$(linkImage).attr('src', 'https://farm5.staticflickr.com/4364/36465540742_952eda9b27_k.jpg');
$(linkDiv).append(linkImage);


xhttp.open("GET", "https://api.giphy.com/v1/gifs/translate?s=disney&api_key=dc4868f0b5f54decab30be68d6e80edb",true);
xhttp.send();




console.log("disney content script: ...end");
