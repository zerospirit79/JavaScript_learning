const windows = document.querySelector('.hiden-block');
const closeBtn = document.querySelector('a');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    windows.classList.remove('animate__bounceInUp');
    windows.classList.add('animate__backOutDown');
    setTimeout(function () {
        windows.classList.add('hidden');
    }, 1000);
});



showBtn.addEventListener('click', function () {
    windows.classList.remove('animate__backOutDown', 'hidden');
    windows.classList.add('animate__animated', 'animate__bounceInUp');
});