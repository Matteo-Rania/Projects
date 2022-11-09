const rollingstoneBtn = document.querySelector('.rollingstoneBtn');
const legalBtn = document.querySelector('.legalBtn');

rollingstoneBtn.addEventListener('click', () => {
    rollingstoneBtn.classList.toggle('active');
});

legalBtn.addEventListener('click', () => {
    legalBtn.classList.toggle('active');
});
