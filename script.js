function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const burger  = document.getElementById('hamburger');
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('show', open);
  burger.classList.toggle('open', open);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('hamburger').classList.remove('open');
}

// Load shared components
function loadComponent(id, file) {
  fetch(file)
    .then(r => r.text())
    .then(html => { document.getElementById(id).innerHTML = html; });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('navbar-placeholder'))  loadComponent('navbar-placeholder',  'navbar.html');
  if (document.getElementById('sidebar-placeholder')) loadComponent('sidebar-placeholder', 'sidebar.html');
  if (document.getElementById('footer-placeholder'))  loadComponent('footer-placeholder',  'footer.html');
});

