document.getElementById('sidebar-toggle').addEventListener('click', function(e) {
  document.querySelector('.content__sidebar__container').classList.toggle('open');
});

document.getElementById('mobile-hamburger').addEventListener('click', function(e) {
  document.querySelector('.top-bar').classList.toggle('open');
});