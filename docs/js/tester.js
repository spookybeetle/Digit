

window.addEventListener('DOMContentLoaded',init,false);
            
function init() {
var buttons = document.getElementsByTagName("button")
    alert('The page loaded!');
}
// This one tells the log when something is copied and pasted from the site
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
  // This one tells the log when the screen goes into fullscreen mode. It is activated when the user presses the f key on their keyboard
 document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "f") {
      toggleFullScreen();
    }
  },
  false,
);

// This one looks for what keys are pressed while the website is open.

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (e.g., 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.
      alert(`Combination of ctrlKey + ${keyName}`);
    } else {
      alert(`Key pressed ${keyName}`);
    }
  },
  false,
);


     