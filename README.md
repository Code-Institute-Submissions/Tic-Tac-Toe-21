<h1>Tic-Tac-Toe Game</h1>
<ul> 
  <li>A simple website which hosts a fun, easy game of Tic Tac Toe. This can be used to play by youself in order to train your knowledge on winning strategies, or with a friend for a quick competitive play.</li>
  <li>This game is suitable for all age groups, but tailored towards 7-11 year olds becuase of the fun color scheme, font, simplicity, and sound effects which are played throughout.
 <ul>
   
<img width="1148" alt="Screenshot of device responsiveness" src="https://user-images.githubusercontent.com/99343676/171053248-733266b2-625c-45f8-9f78-89dcc51bddbb.png">

<h1>Features</h1> 
   <h2>Header</h2>
    <ul>
       <li>The header (<.h1>) uses a font size of 50px which is just big enough to be an attention grabber for the player when they first land on         the site, but just small enough to not take focus away from the game when it is in session.</li>
      <li>Below the header is a 'section' of text which displays the current player. It is manipulated by JavaScript by placing a span inside of         the text content, and retrieving the associated class name. This text has a font-size half that of the title and is centered below to             allow the natural flow the eyes from an end user takes when they first land on the site.</li>
    </ul>
<img width="1106" alt="Screenshot 2022-05-30 at 21 31 03" src="https://user-images.githubusercontent.com/99343676/171056175-b2b95a4f-dcf2-460a-9856-1483c7cc9eaf.png">
     
<h2>Game Board</h2> 
     <ul>
       <li> The game board is the famous 3x3, 9 tile squares everybody knows. It's clean, simple, and of high contrast for good visibility.</li>
       <li> The squares are clear in color which allows them to indirectly inherit the purple gradient background.</li>
       <li> When a tile is clicked, two things happen: a feint sound effect 'click' noise will play to indicate the user has interacted with            the site, and the corresponding string value of 'X' or 'O' will appear, depending which player just took their turn. The reason I wanted          to include an audible feedback is becuase the game is accessible for screenreaders, and by having audio feedback on selecting a tile,            gives the user further confirmation an action has been taken. Additionally, makes the game less mundane and silent.</li>
   </ul>
<img width="1114" alt="screenshot of game board with X's and O's" src="https://user-images.githubusercontent.com/99343676/171056082-654aff6c-339e-463e-9a44-56de038cc3ab.png">

<h2>Resetting the Game</h2>
   <ul>
     <li>At the bottom of the game board is a reset button. Following the design language (simplistic and clean), it inverts the colors of the 
       text and background for high contrast.</li>
     <li>This quickly allows the player(s) to wipe the board clean and start from fresh. Subsequently, JavaScript recognises which player was the last         last from the old game, and automatically resets the new game to start with player 'X'.</li>
   </ul>
<img width="1089" alt="Screenshot of reset button" src="https://user-images.githubusercontent.com/99343676/171056669-41cafe5c-0b00-48ac-9484-b1fdc15d0147.png">

<h2>Game Over</h2>
     <ul>
       <li>There are two outcomes for Tic-Tac-Toe; one party wins, or a tie. Depending which of these outcomes are true determines which line of code is
         ran in the JavaScript file. My vision for the game was to keep audio cues consistent throughout, hence why I added two different audio clips to
         play, whether a player wins, or is a draw. These sounds are fun, light and inviting as to mimic a feeling of winning, though not to impose a                feeling of loss or failure should a tie occur.</li>
<img width="933" alt="Screenshot of code which inputs audio" src="https://user-images.githubusercontent.com/99343676/171060018-2de33ad3-bc21-44d8-b5ba-f1b449d5d088.png">
       <li>The code above corresponds to the desired intent, and is called by its name where conditions for the audio to play are met.</li>
       <li>Once the game has concluded, below the board, and above the reset button is a message which displays the outcome of the game. Either 'Player X/O           won', or 'Tie'. This was used by creating a class, and calling it in CSS/Javascript to hide & display when required.</li>
    </ul>

<h2>Ideas for additional features</h2>
   <ul> 
     <li>Adding more animation to the game through the means of:
       <ul>
          <li>having confetti or some visial celebration when a player wins show on screen</li>
          <li>possibly animating the X's and O's on the board when they are placed, e.g. mimic the object being put down by a hand by having a slow                   'slam/descent' animation placing it inside the tile.</li>
          <li>option for an input form so the user can choose a nickname to associate with their X/O, or allow them to choose which side they'd like to be.           </li>
       </ul>
     </li>
   </ul>
   
<h1>Design</h1>
