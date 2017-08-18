//theme
console.log("theme: " + localStorage.theme);

function loadPage(){
	var theme = localStorage.getItem('theme');
	//send message to content script
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {page_theme: theme}, function(response) {
	    console.log(response);
	  });
	});

}

//when default is clicked

$('#default').click(function(){
	localStorage.setItem('theme', 'default');
	loadPage();
});

$('#Tarzan').click(function(){
	localStorage.setItem('theme', 'tarzan');
	loadPage();
})
