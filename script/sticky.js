let sticky = document.getElementById("sticky");
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 250) {
    
    if (document.documentElement.scrollTop < 400) {
        sticky.classList.add('hide'); 
    } else {
        sticky.classList.add('sticky');
        sticky.classList.remove('hide');
    }

  } else {
    sticky.classList.remove('hide');
    sticky.classList.remove('sticky');
  }
}