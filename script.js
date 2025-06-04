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




  // const { animate } = window.motion;
  // const slider = document.getElementById("slider");
  // const cardWidth = slider.children[0].offsetWidth + 16; // width + gap
  // let index = 0;

  // setInterval(() => {
  //   index++;
  //   if (index * cardWidth >= slider.scrollWidth - slider.clientWidth) {
  //     index = 0;
  //   }

  //   animate(
  //     slider,
  //     { transform: `translateX(-${index * cardWidth}px)` },
  //     { duration: 0.5, easing: "ease-in-out" }
  //   );
  // }, 2000);



  function showTab(tabId, btnElement) {
      // Hide all tab contents
      const contents = document.querySelectorAll('.tab-content');
      console.log(contents)
      contents.forEach(content => content.classList.add('hidden'));

      // Remove yellow style from all buttons
      const buttons = document.querySelectorAll('.tab-btn');
      buttons.forEach(btn => {
        btn.classList.remove('bg-yellow-400', 'text-black');
        btn.classList.add('bg-gray-700', 'text-white');
      });

      // Show selected tab
      document.getElementById(tabId).classList.remove('hidden');

      // Highlight active button
      btnElement.classList.add('bg-yellow-400', 'text-black');
      btnElement.classList.remove('bg-gray-700', 'text-white');
    }
