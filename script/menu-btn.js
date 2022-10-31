const menuBtn = document.querySelector('.mega-menu-button');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    //console.log("added open");
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    //console.log("removed open");
  }
});