document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('switch-menu');
  const icon = menu.getElementsByTagName('i')[0];
  const navbar = document.getElementById('desktop-nav');
  const logo = document.getElementById('logo');
  const header = document.getElementsByTagName('header')[0];
  menu.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      navbar.classList.add('mobile-shown');
      navbar.style.display = 'flex';
      logo.style.display = 'none';
      header.style.minHeight = '100vh';
    } else {
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
      navbar.classList.remove('mobile');
      navbar.style.display = 'none';
      logo.style.display = 'flex';
      header.style.minHeight = 'max-content';
    }
  });
});
