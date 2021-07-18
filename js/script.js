function toggleMenu() {
  const nav = document.getElementById('hidden-nav');
  const btn = document.getElementById('toggle-btn');

  if (nav.style.display == 'block') {
    nav.style.display = 'none';
    btn.style.backgroundImage = "url('../images/icon-hamburger.svg')";
    console.log('if');
  } else {
    nav.style.display = 'block';
    btn.style.backgroundImage = "url('../images/icon-close.svg')";
    console.log('else');
  }
}
