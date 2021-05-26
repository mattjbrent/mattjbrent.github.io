document.getElementById('sidebar-toggle').addEventListener('click', function(e) {
  document.querySelector('.content__sidebar__container').classList.toggle('open');
});

document.getElementById('mobile-hamburger').addEventListener('click', function(e) {
  document.querySelector('.top-bar').classList.toggle('open');
});

document.querySelector('.site-title').addEventListener('click', function(e) {
  document.querySelector('.site-selector').classList.toggle('open');
});

document.querySelectorAll('.filter-tag').forEach(function(element) {
  element.addEventListener('click', function() {
    element.remove();
  })
});

document.querySelector('.input__add').addEventListener('click', function() {
  var contents = document.getElementById('filter__tags').value;
  var pill = htmlToElement('<button class="filter-tag"><p>' + contents + '</p></button>');
  document.querySelector('.filter_tags__container').appendChild(pill);
  pill.addEventListener('click', function() {
    pill.remove();
  })
});


function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}