//content script that will iteract with page
console.log("disney content script: begin...");
var newTabPathName = "/_/chrome/newtab";
var googlePathName = "/";

//redirect newTab to google.com
if (window.location.pathname === newTabPathName){
	location.href = "https://www.google.com";
}


if (window.location.pathname === googlePathName){
	var logo1 = {img: 'https://farm5.staticflickr.com/4398/36468138522_eba45f500b_z.jpg', color: '#ffffcc'};
	var logo2 = {img: "https://preview.ibb.co/jnE3SF/princes.png", color: '#cce0ff'};
	var logo3 = {img: "https://preview.ibb.co/gVeyuv/disneygals2.png", color: '#e5ccff'};
	var logo4 = {img: "https://preview.ibb.co/eYycMa/disney_201_clipart_png_37.png", color: "#f0c1e1"};
	var logo5 = {img: "https://preview.ibb.co/bKJiuv/castle.png", color: "#ffb3b3"};
	var logo6 = {img: "https://preview.ibb.co/jcNySF/inside_out_fan_art_16.png", color: "#c1f0c1"};
	var logo7 = {img: "https://image.ibb.co/kcZTSF/theincredibles.png", color: "#ffcc99"};
	var logo8 = {img: "https://image.ibb.co/mrkvbk/classic_clipart_pooh_16.png", color: "#ffd9b3"};

	//put all possible logo images in an array
	var logos = [];
	logos = [logo1, logo2, logo3,  logo4, logo5, logo6, logo7, logo8];
	updateGoogle(logos);
}

//receive message from popup to customize user theme
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log(message);
    if (message.page_theme === 'default'){

			updateGoogle(logos);
			sendResponse({theme: 'default'});
		}else if(message.page_theme === 'tarzan' ){
			var tarzanBG = [{img: "https://preview.ibb.co/dXnmz5/Tarzan_disneyscreencaps_com_4632.png", color: "#009900"}];
			updateGoogle(tarzanBG);
			sendResponse({theme: 'tarzan'});
		}else if(message.page_theme === 'cars' ){
			var carsBG =[{img: "https://preview.ibb.co/d5hx6k/carsbanner.png", color: "#ff6666"}];
			updateGoogle(carsBG);
			sendResponse({theme: 'cars'});
		}else if(message.page_theme === 'tangled' ){
			var tangledBG = [{img: "https://image.ibb.co/hCrGhQ/tangled_BG.png", color: "#f2e6ff"}];
			updateGoogle(tangledBG);
			sendResponse({theme: 'tangled'});
		}

	});



function updateGoogle(logos){

	var image = function(){return logos[Math.floor(Math.random()*logos.length)]};

	//random videos
	var numVids = 10;
	var index = Math.floor(Math.random()*numVids);

	//remove top sites
	var removeSites = document.getElementById('mv-tiles');
	$(removeSites).remove();


	//remove bottom search buttons
	var removeButtons = document.getElementsByClassName('jsb');
	$(removeButtons).remove();

	//add our own stuff
	var ourDiv = $('<div></div>');
	$(ourDiv).attr('id', 'newContent');

	//apend ourDiv
	var origDiv = document.getElementById('prm-pt');
	$(origDiv).append(ourDiv);

	//Link stuff here
	var linkDiv = $('<a></a>');
	$(linkDiv).attr('href', 'http://www.disney.com/');
	$(linkDiv).attr('id', 'disneyWeb');
	$(linkDiv).attr('target', "_blank");
	$(ourDiv).append(linkDiv);

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
		//console.log(obj);
		var url = obj.data.embed_url
		//console.log(obj.data.embed_url);
		var giphy = $('<iframe>', {
			src: url,
					frameborder: 0,
					id: 'gif'
		})


		$(linkDiv).append(giphy);
	}

	//imageDiv for link
	var linkImage = $('<img></img>');
	$(linkImage).attr('id', 'linkPhoto');
	$(linkImage).attr('src',"https://image.ibb.co/iAiSMa/disney_comlogo.png", width="150",height="150");
	$(linkDiv).append(linkImage);
	//console.log("index: " + index);

	var vidSource = 'https://www.youtube.com/embed/videoseries?list=PLmLrLFIfPyS7Xz9ErhMAt15rPXBoBkPr2&index=' + index + '&autoplay=1';
	var vid = '<iframe src=' + vidSource + ' width="400" height="240" frameborder="0" allowfullscreen></iframe>';
	//console.log(vid);

	$(linkDiv).append(vid);
	$(linkDiv).attr('id', 'video');

	var pOfWeirdSpace = document.getElementById('body');
	var deletedWeirdSpace = pOfWeirdSpace.childNodes[0].childNodes[1];
	deletedWeirdSpace.style.height = "60px";

	//console.log("Source of vid: " + $('#video').attr('src'));

	xhttp.open("GET", "https://api.giphy.com/v1/gifs/translate?s=disney&api_key=dc4868f0b5f54decab30be68d6e80edb",true);
	xhttp.send();


	updateGoogle(logos);
}

//receive message from popup to customize user theme
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log(message);
    if (message.page_theme === 'default'){

			updateGoogle(logos);
			sendResponse({theme: 'default'});
		}else if(message.page_theme === 'tarzan' ){
			var tarzanBG = [{img: "https://preview.ibb.co/dXnmz5/Tarzan_disneyscreencaps_com_4632.png", color: "#009900"}];
			updateGoogle(tarzanBG);
			sendResponse({theme: 'tarzan'});
		}else if(message.page_theme === 'cars' ){
			var carsBG =[{img: "https://preview.ibb.co/d5hx6k/carsbanner.png", color: "#ff6666"}];
			updateGoogle(carsBG);
			sendResponse({theme: 'cars'});
		}else if(message.page_theme === 'tangled' ){
			var tangledBG = [{img: "https://preview.ibb.co/ifqL95/tangled_BG.pn", color: "#f2e6ff"}];
			updateGoogle(tangledBG);
			sendResponse({theme: 'tangled'});
		}

	});



function updateGoogle(logos){

	var image = function(){return logos[Math.floor(Math.random()*logos.length)]};


	//update logo
	var changeLogo = document.getElementById('hplogo');
	var p = changeLogo.parentNode;
	p.removeChild(changeLogo);

	//update google image
	var images = document.createElement('IMG');
	images.id = 'hplogo';
	images.setAttribute("src", image().img);
	document.body.style.backgroundColor = image().color;
	//images.setAttribute("style", "background-color:" + image().color);
	p.appendChild(images);




}


console.log("disney content script: ...end");
