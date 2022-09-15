document.addEventListener('DOMContentLoaded', (e) => {
  console.log('imported');
  const m = document.getElementById('switch-menu');
  const icon = m.getElementsByTagName('i')[0];
  const navbar = document.getElementById('desktop-nav');
  m.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      navbar.classList.add('mobile-shown');
      navbar.style.display = 'none';
    } else {
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
      navbar.classList.remove('mobile');
      navbar.style.display = 'flex';
    }
  });
});
