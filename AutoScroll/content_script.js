setInterval(
	function autoScroll(){
		chrome.tabs.executeScript({code:'window.scrollBy(0,500)' });	
	},3000);

