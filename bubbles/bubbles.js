let bubbles = document.querySelectorAll('.bubble');
let container = document.querySelector('#container');

bubbles.forEach(function (bubble) {
    bubble.style.left = (70 * Math. random()) + '%';
    bubble.style.bottom = (40 * Math. random()) + '%';
});

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('bubble')) {
        event.target.remove();
    }
});