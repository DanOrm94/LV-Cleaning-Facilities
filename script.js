document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });

  var navToggle = document.getElementById('nav-toggle');
  var menu = document.querySelector('.menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      if (success) {
        success.style.display = 'block';
      }
      form.reset();
    });
  }
});
