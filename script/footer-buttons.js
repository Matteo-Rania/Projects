const rollingstoneBtn = document.querySelector('.rollingstoneBtn');
const legalBtn = document.querySelector('.legalBtn');
const ourSitesBtn = document.querySelector('.our-sites-btn');

rollingstoneBtn.addEventListener('click', () => {
    rollingstoneBtn.classList.toggle('active');
});

legalBtn.addEventListener('click', () => {
    legalBtn.classList.toggle('active');
});

ourSitesBtn.addEventListener('click', () => {
    ourSitesBtn.classList.toggle('active');
});
