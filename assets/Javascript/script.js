window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset-btn');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '','', '', '','', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    // declaring end game statments 
    const PLAYERX_Won = 'PlayerX_Won'
    const PLAYERO_Won = 'PlayerO_Won'
    const TIE = 'It\'s a Tie'

    resetButton.addEventListener('click', resetBoard);
});