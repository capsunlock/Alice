let menuInitialized = false;

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show')

  console.log(navLinks)

  // Close menu if a link is clicked
  if (!menuInitialized) {
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      });
    });
    menuInitialized = true;
  }
}