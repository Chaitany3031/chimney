function toggleDropdown(id) {
  const dropdowns = ['servicesDropdown', 'aboutDropdown'];

  dropdowns.forEach(dropdownId => {
    const dropdown = document.getElementById(dropdownId);
    if (dropdownId === id) {
      dropdown.classList.toggle('hidden');
    } else {
      dropdown.classList.add('hidden');
    }
  });
}


document.addEventListener('click', function (event) {
  const isClickInside = event.target.closest('nav');
  if (!isClickInside) {
    document.getElementById('servicesDropdown').classList.add('hidden');
    document.getElementById('aboutDropdown').classList.add('hidden');
  }
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
