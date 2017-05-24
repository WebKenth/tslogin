chrome.webNavigation.onCompleted.addListener(
function(details) {
	console.log(details);
    chrome.tabs.executeScript(details.tabId, {
        file: "automaticLogin.js"
    });
},
{
	url : [
	    {
	        pathSuffix: '/admin/logon.aspx'
	    },
	    {
	    	pathSuffix: '/admin/Logon.aspx'
	    }
	]
});