// chrome.runtime.onInstalled.addListener(function() {
//     // chrome.storage.sync.set({color: '#3aa757'}, function() {
//     //   console.log("The color is green.");

//     // });
//   });

chrome.tabs.onUpdated.addListener(function(){
	console.log('loading');
	document.location ='https://example.com'
});

