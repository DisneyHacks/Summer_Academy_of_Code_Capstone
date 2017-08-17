//content script that will iteract with page
console.log("disney content script: begin...");
var newTabPathName = "/_/chrome/newtab";
var googlePathName = "/";

if (window.location.pathname === newTabPathName || window.location.pathname === googlePathName){

//IMAGES URL HERE
var logo1 = {img: 'https://farm5.staticflickr.com/4398/36468138522_eba45f500b_z.jpg', color: '#ffffcc'};
//var logo1 = "https://farm5.staticflickr.com/4398/36468138522_eba45f500b_z.jpg";
//var logo2 = "https://farm5.staticflickr.com/4353/36637034225_a97300968c_z.jpg";
//var logo3 = "https://farm5.staticflickr.com/4402/36590813826_a87542f437_z.jpg";
// var logo4 = "";
//put all possible logo images in an array
var logos = [];
logos = [logo1]//, logo2, logo3]// logo4]//, 'logo5.jpg',
// 'logo6.jpg', 'logo7.png', 'logo8.png','logo9.png','logo10.png','logo11.png'];

// var imageDiv = document.getElementById('lga');
// imageDiv.appendChild(images)

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
images.setAttribute("src", image().img);
document.body.style.backgroundColor = image().color;
//images.setAttribute("style", "background-color:" + image().color);
p.appendChild(images);

//remove top sites
var removeSites = document.getElementById('mv-tiles');
$(removeSites).remove();
}

//add our own stuff
var ourDiv = $('<div></div>');
$(ourDiv).attr('id', 'newContent');

//apend ourDiv
var origDiv = document.getElementById('prm-pt');
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
        frameborder: 0,
        id: 'gif'
	})


	$(ourDiv).append(giphy);
}

//Link stuff here
var linkDiv = $('<a></a>');
$(linkDiv).attr('href', 'http://www.disney.com/');
$(linkDiv).attr('id', 'disneyWeb');
$(linkDiv).attr('target', "_blank");
$(ourDiv).append(linkDiv);
//imageDiv for link
var linkImage = $('<img></img>');
$(linkImage).attr('id', 'linkPhoto');
$(linkImage).attr('src', "https://farm5.staticflickr.com/4394/36238617010_e82da3be75_m.jpg", width="240", height="132" );
$(linkDiv).append(linkImage);
$(linkDiv).append('<iframe width="400" height="240" src="https://www.youtube.com/embed/videoseries?list=PLmLrLFIfPyS7Xz9ErhMAt15rPXBoBkPr2" frameborder="0" allowfullscreen></iframe>');

xhttp.open("GET", "https://api.giphy.com/v1/gifs/translate?s=disney&api_key=dc4868f0b5f54decab30be68d6e80edb",true);
xhttp.send();




console.log("disney content script: ...end");
