(function() {
  'use strict';
  let icon = document.querySelector('#menuIcon');
  let menu = document.querySelector('#navbar ul');
  menu.classList.add('invisible');
  icon.addEventListener('click', function() {
    menu.classList.toggle('invisible');
  });
}());
