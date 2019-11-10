const addButtonToSidebar = (id, title, callback) => {
  const targetElement = document.querySelector('[role=navigation] ul');
  const sidebarExists = targetElement !== undefined && targetElement !== null;
  if (!sidebarExists) {
    return;
  }

  const existingButton = document.getElementById(id);
  const buttonAlreadyExists = existingButton !== undefined && existingButton !== null;
  if (buttonAlreadyExists) {
    return;
  }

  const buttonText = document.createElement('span');
  buttonText.className = 'b-list-label';
  buttonText.innerHTML = title;
  
  const buttonAnchor = document.createElement('a');
  buttonAnchor.appendChild(buttonText);
  
  const button = document.createElement('li');
  button.className = 'b-list-item p-nav-item';
  button.setAttribute('id', id);
  button.addEventListener('click', callback)
  button.appendChild(buttonAnchor);
  targetElement.appendChild(button)
}

const addButtonToMenubar = (id, title, callback) => {
  const targetElement = document.querySelector('[role=navigation] .mm-navbar__menu-list');
  const sidebarExists = targetElement !== undefined && targetElement !== null;
  if (!sidebarExists) {
    return;
  }

  const existingButton = document.getElementById(id);
  const buttonAlreadyExists = existingButton !== undefined && existingButton !== null;
  if (buttonAlreadyExists) {
    return;
  }

  const buttonText = document.createElement('span');
  buttonText.className = 'mm-nav-item__label mm-nav-item__label--link';
  buttonText.innerHTML = title;

  const button = document.createElement('li');
  button.className = 'mm-nav-item';
  button.setAttribute('id', id);
  button.addEventListener('click', callback);
  button.appendChild(buttonText);
  targetElement.appendChild(button);
}

const goFullscreen = () => {
  document.documentElement.mozRequestFullScreen();
}

const removeElementByQuerySelector = (querySelector) => {
  const element = document.querySelector(querySelector);
  if (element !== undefined && element !== null) {
    element.parentNode.removeChild(element);
  }
}

const setElementStyle = (querySelector, styles) => {
  const element = document.querySelector(querySelector);
  if (element !== undefined && element !== null) {
    for (const [style, value] of Object.entries(styles)) {
      element.style[style] = value;
    }
  }
}

const a = alert;
const hideNav = () => {
  removeElementByQuerySelector('.site-bar');
  removeElementByQuerySelector('[id=mega-menu-target]');
  setElementStyle('header[role=banner]', {height: 0, overflow: 'hidden'});

  // close the mobile burger menu
  document.body.classList.remove('burger-open');

  // move the content up to fill the space left by the navbar
  setElementStyle('html body.responsive-enabled div#site-main', {'padding-top': '0px'});
  setElementStyle('.ct-character-sheet-mobile__header', {'top': '0px'});

  // update the background position to be just under the header
  const sheet = window.document.styleSheets[0];
  sheet.insertRule('@media (min-width: 1200px) {body {position: relative; background-position-y: 116px !important}}', sheet.cssRules.length);
  sheet.insertRule('@media (max-width: 1200px) {body {position: relative; background-position-y: 94px !important}}', sheet.cssRules.length);
}

const addButtons = () => {
  addButtonToSidebar('fullscreen-button-sidebar', 'Fullscreen', goFullscreen);
  addButtonToMenubar('fullscreen-button-menubar', 'Fullscreen', goFullscreen);
  addButtonToSidebar('hidenav-button-sidebar', 'Hide Nav', hideNav);
  addButtonToMenubar('hidenav-button-menubar', 'Hide Nav', hideNav);
}

window.addEventListener('resize', addButtons);
addButtons();
