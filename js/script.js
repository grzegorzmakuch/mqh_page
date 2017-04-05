var submenu1 = document.getElementById('submenu1');
submenu1.style.display = 'none';

var submenu2 = document.getElementById('submenu2');
submenu2.style.display = 'none';

var submenu3 = document.getElementById('submenu3');
submenu3.style.display = 'none';

var item1 = document.getElementById('menu-item-gory');
var item2 = document.getElementById('menu-item-granie');
var item3 = document.getElementById('menu-item-progr');

item1.addEventListener('click', function() {
  submenu1.style.display = 'block';
});

item2.addEventListener('click', function() {
  submenu2.style.display = 'block';
});

item3.addEventListener('click', function() {
  submenu3.style.display = 'block';
});