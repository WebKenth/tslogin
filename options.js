// Saves options to chrome.storage.sync.
function save_options() {
  var tsusername = document.getElementById('tsusername').value;
  var tspassword = document.getElementById('tspassword').value;
  console.log(tsusername,tspassword);
  chrome.storage.sync.set({
    tsusername: tsusername,
    tspassword: tspassword
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    tsusername: 'test',
    tspassword: 'test'
  }, function(items) {
    document.getElementById('tsusername').value = items.tsusername;
    document.getElementById('tspassword').value = items.tspassword;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

console.log('loaded');