const menuBtn = document.querySelector('.mega-menu-button');
const menuBox = document.querySelector('.mega-menu-window');
const menuOut = document.querySelector('.mega-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    //to close menu when clicking outside
    menuOut.addEventListener('click', (e) => {
      //check if the click was in the mega-menu-window area
      if (!menuBox.contains(e.target)) {
      menuBtn.classList.remove('open');
      menuOpen = false;
      }
    })
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
