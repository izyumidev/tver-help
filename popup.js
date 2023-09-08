let link = "";

chrome.storage.sync.get(["url"], (result) => {
  console.log(`Value currently is ${result.url}`);
  link = result.url;
  document.getElementsByClassName("link")[0].innerHTML = link;
});

$(".copy").on("click", function () {
  copyToClipboard(link);
});

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};
