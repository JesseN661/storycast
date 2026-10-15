// Mobile navigation toggle (progressive enhancement).
// The nav is fully visible and usable without JavaScript; on small screens
// CSS hides it until this button sets data-open="true".
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.setAttribute('data-open', String(!isOpen));
  });
})();
