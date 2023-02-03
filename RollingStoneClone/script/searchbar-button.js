const searchBtn = document.querySelector('.searchbar-button');
const searchArea = document.querySelector('.searchbar-input-area');
let searchOpen = false;
searchBtn.addEventListener('click', (e) => {
  if(!searchOpen) {
      searchBtn.classList.add('open');
      searchOpen = true;
      //to close searchbar when clicking outside
      window.addEventListener('click', (e) => {
      //check if the click was in the searchbar area
      if (!searchBtn.contains(e.target) && !searchArea.contains(e.target)) {
      console.log("removed");
      searchBtn.classList.remove('open');
      searchOpen = false;
      }
    })
  } else {
    searchBtn.classList.remove('open');
    searchOpen = false;
  }
});
