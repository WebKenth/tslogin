if(document.location.search == "" || document.location.search == "?action=logout")
{
	console.log("LOGGING YOU IN");
	chrome.storage.sync.get(['tsusername','tspassword'], function(items) {
		document.querySelector('input[name="logon"]').value = items.tsusername;
		document.querySelector('input[name="password"]').value = items.tspassword;
	});
	setTimeout(function(){ 
		document.querySelector('input[type="submit"]').click();
	}, 1000);
}
