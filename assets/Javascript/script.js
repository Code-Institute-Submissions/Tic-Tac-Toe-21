window.addEventListener('DOMContentLoaded', () => {
    let tiles = Array.from(document.querySelectorAll('.tile'));
    let resetButton = document.querySelector('#reset-btn');
    let announcer = document.querySelector('.announcer');

    let board = ['', '', '','', '', '','', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });
    resetButton.addEventListener('click', resetBoard);
});
   
// declaring end game statments 
    const PLAYERX_WON = 'PlayerX_Won'
    const PLAYERO_WON = 'PlayerO_Won'
    const TIE = 'It\'s a Tie'

    /* 
        Game board index:
        [0][1][2]
        [3][4][5]
        [6][7][8]
    */

    const WINNING_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];

    // runs loop to see if game winning conditions have been met
    function handleResultValidation() { 
        let roundWon = false; 
        for (let i=0; i <=7; i++) { 
            const WIN_CONDITION = WinningConditions[i];
            let a = board[WIN_CONDITION[0]];
            let b = board[WIN_CONDITION[1]];
            let c = board[WIN_CONDITION[2]];
            if (a === '' || b === '' || c === '') { 
                continue;
            }
            if (a === b && b === c) { 
                roundWon = True;
                break;
            }
        }
    if (roundWon) { 
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
    if (!board.includes(''));
    announce(TIE);
}

    // announces which player has won
    let announce = (type) => { 
        switch(type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
    };

    // changes player based on which turn has just been taken
    const CHANGE_PLAYER = () => { 
        let playerDisplay = document.querySelector('.display-player');
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }
    
    // represents which user is currently playing. Checks whether game is active or not.
    const USER_ACTION = (tile, index) => { 
        if(isValidAction(tile) && isGameActive) { 
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer;
        }
    }
