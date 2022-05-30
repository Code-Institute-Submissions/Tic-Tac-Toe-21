    let tiles = Array.from(document.querySelectorAll('.tile'));
    let playerDisplay = document.querySelector('.display-player');
    let resetButton = document.querySelector('#reset-btn');
    let announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

// declaring end game statments 
    const PLAYERX_WON = 'PlayerX_WON';
    const PLAYERO_WON = 'PlayerO_WON';
    const TIE = 'TIE';

    /* 
        Game board index:
        [0][1][2]
        [3][4][5]
        [6][7][8]
    */

    let winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];

    // runs loop to see if game winning conditions have been met
    function handleResultValidation() { 
        let roundWon = false; 
        for (let i = 0; i <= 7; i++) { 
            let winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') { 
                continue;
            }
            if (a === b && b === c) { 
                roundWon = true;
                break;
            }
        }
    
    if (roundWon) { 
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
    if (!board.includes(''))
    announce(TIE);
    }

    // announces which player has won
    let announce = (type) => {
        switch(type){
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

    //checks whether a tile has a value or not
    let isValidAction = (tile) => { 
        if (tile.innerText === 'X' || tile.innerText === 'O'){ 
            return false;
        }
        
        return true;
    };

    //adds audible feedback when a tile is clicked
    let audio = new Audio
    audio.src = "assets/images/click.mp3"
    
    //updates the board
    let updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    // changes player based on which turn has just been taken
    let changePlayer = () => { 
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    // represents which user is currently playing. Checks whether game is active or not.
    let userAction = (tile, index) => { 
        if(isValidAction(tile) && isGameActive) { 
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    let resetBoard = () => { 
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true; 
        announcer.classList.add('hide');

        if (currentPlayer === 'O') { 
            changePlayer();
        }

        tiles.forEach(tile => { 
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });
    
    resetButton.addEventListener('click', resetBoard);

