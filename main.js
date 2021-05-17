const search = document.querySelector('.search');
const input = document.querySelector('.searchInput');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    input.classList.add('activeInput');
    input.focus();
    btn.classList.add('activeBtn');
})