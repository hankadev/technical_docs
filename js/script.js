(function() {
  'use strict';
  /* listen for the click on the menu icon and show/hide the menu */
  let icon = document.querySelector('#menuIcon');
  let menu = document.querySelector('#navbar ul');
  icon.addEventListener('click', function() {
    menu.style.display == 'block' ?   menu.style.display = 'none' :   menu.style.display = 'block';
  });
  /* listen for window width and change the visibility of menu accordingly */
  window.addEventListener('resize', function () {
    window.innerWidth >= 600 ? menu.style.display = 'block' : menu.style.display = 'none';
  }); 
}());
