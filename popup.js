const state = {};

const onButton = document.getElementById('on');
const offButton = document.getElementById('off');

function styleElementOnClick(element) {
  element.style.color = '#'
  element.style.backgroundColor = '#FBFFFE';
  element.style.color = '#0A0A0B';
}

function toggleExtension(newState) {
  switch (newState) {
    case "on":
      break;
    case "off":
      break;
  }
}

onButton.addEventListener("click", toggleExtension("on"));
offButton.addEventListener("click", toggleExtension("off"));