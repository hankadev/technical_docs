(function() {
  'use strict';
  let icon = document.querySelector('#menuIcon');
  let menu = document.querySelector('#navbar ul');
  icon.addEventListener('click', function() {
    menu.style.display == 'block' ?   menu.style.display = 'none' :   menu.style.display = 'block';
  });
}());
