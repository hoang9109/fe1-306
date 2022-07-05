const pinwheel = document.querySelector('.pinwheel');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
let angle = 0;
let pinwheenTimeout;

rotatePinwheel();

btnStart.addEventListener('click', function () {
    rotatePinwheel();
    btnStart.style.display = 'none';
    btnStop.style.display = 'unset';
});
btnStop.addEventListener('click', function () {
    clearTimeout(pinwheenTimeout);
    btnStart.style.display = 'unset';
    btnStop.style.display = 'none';
});

function rotatePinwheel() {
    pinwheenTimeout = setTimeout(function rotate() {
        pinwheel.style.transform = `rotate(${angle}deg)`;
        angle++;

        pinwheenTimeout = setTimeout(rotate, 10);
    }, 10);
}