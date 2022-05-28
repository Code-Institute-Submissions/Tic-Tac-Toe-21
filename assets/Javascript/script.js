window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset-btn');
    const announcer = document.querySelector('.announcer');

    resetButton.addEventListener('click', resetBoard);
});