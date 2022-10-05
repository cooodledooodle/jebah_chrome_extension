chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: clear,
  });
});

function clear() {
  var elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type == "text" || elements[i].type == "number") {
      elements[i].value = "";
    } else if (elements[i].type == "radio" || elements[i].type == "checkbox") {
      elements[i].checked = false;
    }
  }
}


chrome.commands.onCommand.addListener((command) => {

});
