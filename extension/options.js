let version = `v${chrome.runtime.getManifest().version}`

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("extension_version").textContent = version;
  let database_input = document.getElementById("database");
  let save_button = document.getElementById("save");
  let status = document.getElementById("status");

  chrome.storage.local.get(null, function(items) {
    database_input.value = items.database;
  });

  // function which show you "Saved" when you update DB
  save_button.addEventListener("click", function() {
    chrome.storage.local.set({
      database: database_input.value
    }, function() {
      status.textContent = "SAVED";
      setTimeout(function() {
        status.textContent = "";
      }, 1500);
      chrome.runtime.sendMessage({ action: "load-options" });
    });
  });
});
