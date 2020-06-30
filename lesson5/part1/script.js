const windows = document.querySelector('.hiden-block');
const closeBtn = document.querySelector('a');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    windows.classList.add('hidden');
});



showBtn.addEventListener('click', function () {
    windows.classList.remove('hidden');
});