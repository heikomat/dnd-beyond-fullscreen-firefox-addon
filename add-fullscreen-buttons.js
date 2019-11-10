const addButtonToSidebar = () => {
  const targetElement = document.querySelector('[role=navigation] ul');
  const sidebarExists = targetElement !== undefined && targetElement !== null;
  if (!sidebarExists) {
    return;
  }

  const existingFullscreenButton = document.getElementById('fullscree-button-sidebar');
  const fullscreenButtonAlreadyExists = existingFullscreenButton !== undefined && existingFullscreenButton !== null;
  if (fullscreenButtonAlreadyExists) {
    return;
  }

  const fullscreenButtonText = document.createElement('span');
  fullscreenButtonText.className = 'b-list-label';
  fullscreenButtonText.innerHTML = 'Fullscreen';
  
  const fullscreenButtonAnchor = document.createElement('a');
  fullscreenButtonAnchor.appendChild(fullscreenButtonText);
  
  const fullscreenButton = document.createElement('li');
  fullscreenButton.className = 'b-list-item p-nav-item';
  fullscreenButton.setAttribute('id', 'fullscree-button-sidebar');
  fullscreenButton.addEventListener('click', () => {
    document.documentElement.mozRequestFullScreen();
  })
  fullscreenButton.appendChild(fullscreenButtonAnchor);
  targetElement.appendChild(fullscreenButton)
}

const addButtonToMenubar = () => {
  const targetElement = document.querySelector('[role=navigation] .mm-navbar__menu-list');
  const sidebarExists = targetElement !== undefined && targetElement !== null;
  if (!sidebarExists) {
    return;
  }

  const existingFullscreenButton = document.getElementById('fullscree-button-menubar');
  const fullscreenButtonAlreadyExists = existingFullscreenButton !== undefined && existingFullscreenButton !== null;
  if (fullscreenButtonAlreadyExists) {
    return;
  }

  const fullscreenButtonText = document.createElement('span');
  fullscreenButtonText.className = 'mm-nav-item__label mm-nav-item__label--link';
  fullscreenButtonText.innerHTML = 'Fullscreen';

  const fullscreenButton = document.createElement('li');
  fullscreenButton.className = 'mm-nav-item';
  fullscreenButton.setAttribute('id', 'fullscree-button-menubar');
  fullscreenButton.addEventListener('click', () => {
    document.documentElement.mozRequestFullScreen();
  });
  fullscreenButton.appendChild(fullscreenButtonText);
  targetElement.appendChild(fullscreenButton);
}

const addButtons = () => {
  addButtonToSidebar();
  addButtonToMenubar();
}

window.addEventListener('resize', addButtons);
addButtons();
