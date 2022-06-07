<h1>Tic-Tac-Toe</h1>
<ul> 
    <li>A simple website which hosts a fun, easy game of Tic Tac Toe. This can be used to play by yourself to train your knowledge on winning strategies, or with a friend for a quick competitive play.</li>
    <li>This game is suitable for all age groups but tailored towards 7-11-year-olds because of the fun colour scheme, font, simplicity, and sound effects which are played throughout.
</ul>

<h1>Wireframe/First Concept</h1>
   <img height= 500 width=640 src="readmeMedia/wireframe.png">
   <p>The initial concept for the game was to keep it simple and have everything accessible and on-screen for the player to see. <br> This included having the title at the top and which player is currently playing, the rules to the side of the board, and the reset button to start the game over again and the bottom of the page.</p>
<h1>Features</h1> 
    <h2>Header</h2>
    <ul>
        <li>The header uses a font size of 50px which is just big enough to be an attention grabber for the player when they first land on the site, but just small enough to not take focus away from the game when it is in session.</li>
        <li>Below the header is a div with text which displays the current player. It is manipulated by JavaScript by placing a span inside of the text content, and retrieving the associated class name. This text has a font-size half that of the title and is centered below to allow the natural flow of the eyes an end user should follow when they first land on the site.</li>
    </ul>
<img width="1106" alt="header" src="https://user-images.githubusercontent.com/99343676/171056175-b2b95a4f-dcf2-460a-9856-1483c7cc9eaf.png">
     
<h2>Game Board</h2> 
<ul>
    <li> The game board is the famous 3x3, 9 tile squares everybody knows. It's clean, simple, and of high contrast for good visibility.</li>
    <li> The squares are clear in colour which allows them to indirectly inherit the purple gradient background.</li>
        <li> When a tile is clicked, two things happen: a faint sound effect 'click' noise will play to indicate the user has interacted with the site, and the corresponding string value of 'X' or 'O' will appear, depending which player just took their turn. The reason I wanted to include audible feedback is so the game is accessible for screenreaders, and having audio feedback on selecting a tile, gives the user further confirmation an action has been taken. Additionally, makes the game less mundane and silent.</li>
</ul>
<img width="1114" alt="screenshot of game board with X's and O's" src="https://user-images.githubusercontent.com/99343676/171056082-654aff6c-339e-463e-9a44-56de038cc3ab.png">

<h2>Resetting the Game</h2>
<ul>
    <li>At the bottom of the game board is a reset button. Following the design language (simplistic and clean), it inverts the colors of the 
       text and background for high contrast.</li>
        <li>This quickly allows the player(s) to wipe the board clean and start from fresh. Subsequently, JavaScript recognises which player was the last player from the old game, and automatically resets the new game to start with player 'X'.</li>
</ul>
<img width="1089" alt="Screenshot of reset button" src="https://user-images.githubusercontent.com/99343676/171056669-41cafe5c-0b00-48ac-9484-b1fdc15d0147.png">

<h2>Game Over/Audio</h2>
<ul>
    <li>There are two outcomes for Tic-Tac-Toe; one party wins, or a tie. Depending on which of these outcomes are true determines which line of code is run in the JavaScript file. My vision for the game was to keep audio cues consistent throughout, hence why I added two different audio clips to play, whether a player wins, or is a draw. These sounds are fun, light and inviting as to mimic a feeling of winning, though not to impose a feeling of loss or failure should a tie occur.</li>

<img width="933" alt="Screenshot of code which inputs audio" src="readmeMedia/audioSS.png">
    <li>The code above corresponds to the desired intent, and is called by its name where conditions for the audio to play are met.</li>
    <li>Once the game has concluded, below the board, and above the reset button is a message which displays the outcome of the game. Either 'Player X/O won', or 'Tie'. This was used by creating a class, and calling it in CSS/Javascript to hide & display when required. I opted for the winning player to be displayed below the board, and not replace the 'current player' section at the top so the user would see the 'reset' button right away and know that it is a prompt (as opposed to an automatic game feature) to restart the game.</li>
</ul>
    <img width="1191" alt="Screenshot of winning text outcome" src="https://user-images.githubusercontent.com/99343676/171162580-16b1110f-ba0c-4d78-8a36-c8a3e1404a8b.png">

<h2>Popup Game Rules</h2>
<ul>
    <li>Instead of having the game rules constantly on the screen (this caused some UI and UX concerns), I opted for an automatic popup tab with the rules on. This shows two seconds after the site loads, and closes upon the user interacting with the 'okay' button.</li>
</ul>

<h2>Ideas for additional features</h2>
<ul> 
    <li>Adding more animation to the game through the means of:
    <ul>
        <li>Having confetti or some visual celebration when a player wins to show on screen</li>
        <li>Possibly animating the X's and O's on the board when they are placed, e.g. mimic the object being put down by a hand by having a slow 'slam/descent' animation placing it inside the tile.</li>
        <li>Option for an input form so the user can choose a nickname to associate with their X/O, or allow them to choose which side they'd like to be.</li>
        <li>Allow for a single-player mode where the user plays against a computer. This could be done by manipulating the Math.floor.Math.random generator where it would randomly pull empty strings from the array and place a marker to indicate the computer's move.
    </ul>
     </li>
</ul>
   
<h1>Design</h1>
    <h2>Colours</h2>
    <ul>
        <li>The colours used on this site are complementary to one another and don't clash. This allows for easy and pleasant viewing of the eyes whilst playing. In regards to colour science, blue and orange are complementary colours, and purple is a triad (source: colormatters.com). This means that when all colours are in play on the board, neither one of them takes the focus away from another.</li>
        <li>The white text and lines for the game board are of high contrast and visibility, making each letter, sentence or action easy to acknowledge - this helps achieve my goal for the site to be as accessible as possible too.</li>
        <li>All of the text has a feathered shadow around it to give a sense of depth rather than every object on the site being flat and 2D. This was achieved by using the class feature in HTML and calling it in CSS using the 'box-shadow' property.</li>
        <li>Additionally, the reset button has a shadow, but when it is being hovered over, the shadow loses its softness. This is a very subtle design change, however, gives off an unintrusive visual cue that the users' action is being recognised</li>
    </ul>
    <h2>Font</h2>
        <ul>
        <li>The font used within the site is "Alegreya Sans". This font made sense due to it not being too plain, nor fancy, but right enough to seem fun and easily readable.</li>
        <li>I used <a href="https://fonts.google.com/">Google Fonts</a> to find and import the fonts to my workspace.
    </ul>
   
<h1>Anomaly</h1>
    <h2>Safari</h2>
    <ul>
        <li>Upon running my game in the Safari web browser, the chosen font 'Alegreya Sans' doesn't load, so the fallback 'sans-serif' is used instead. This is the case on both mobile and desktop versions of safari.</li></ul>
    <h2>All Browsers</h2>
    <ul>
        <li>The interactive 'click' noise which plays when a player places a tile doesn't always respond to how fast the tiles are moved. This is because the audio clip used for the sound is 1 second long, so it needs a gap of at least 1 second in order to 'reset' and play again.</li>
        <li>When the height of a browser/device becomes less than 650px, the vertical height of the background stops and presents a blank white canvas to fill in the extended space at the bottom of the screen. There is extended space, because on screens >650px, once the game announces who wins (or ties), the reset buttons gets pushed down some pixels, thus creating this new area. However, during testing, I wasn't able to find a device which this effected - only desktop browsers which are minimised to the smallest size.</li> 
    </ul>
      
<h1>Fixed Bugs</h1>
        <h2>Stuck announcer message</h2>
        <ul>
            <li>When testing the game, the announcer message which is hidden until a player wins, or is a tie, was on the screen constantly and didn't follow its cues. This resulted in 'Tie' being fixed to the screen when the game had just started and throughout. After looking at the code related to that action, I noticed a semi-colon on the line above where it should have been (line 79/80 in JavaScript). By moving this down to line 80, it hid the announcer message until called upon, and made the game work as intended.</li>
        </ul>

<h1>Testing</h1>
    <p>There are a few features which needed to be tested on my game to make sure it all works as intended. Here's how to test them:</p>
    <ul>
        <li>Wait two seconds when the page loads to ensure the 'rules popup tab' makes an appearance and closes when the 'okay' button is clicked.</li>
        <li>Before placing a tile, check if the game starts and shows the first player to be 'player X'.</li>
        <li>Have volume on when playing to hear the 'click' noise when a tile is placed on the board.</li>
        <li>Purposely win with one of the tiles (X or O) to make sure the game-winning conditions function correctly without mistaking one player for another or allowing a win outside the scope of the rules. </li>
        <li>Purposely end the game with both winning/tie outcomes to test if the corresponding text and audio cue are presented.</li>
        <li>Click the 'reset' button to check functionality and if the game resets with the same conditions as it did when the site loaded.</li>
        <li>Deploy the game on different browsers and devices to test the responsiveness and if any browsers had specific issues that others didn't.</li>
    </ul>
    <p>The desired outcome from all this testing, and the game itself is for a smooth, non-interrupted gameplay experience where the user can easily understand the purpose of the site, and allow it to be intuitive enough that it is suitable for the target audience.</p>

<h2>Lighthouse</h2>
<img width="589" alt="Screenshot of Lighthouse Score" src="https://user-images.githubusercontent.com/99343676/171166144-f6f9a31a-28fc-486c-aead-6a5e51b3786d.png">
   <ul><li>From running a Lighthouse test in Google Chrome, I returned a score of 100 in each 4 areas.</li></ul>
   
   <h2>Validator Testing</h2>
    <ul>
        <li>There are no HTML errors found by the official <a href="https://validator.w3.org/">W3C Validator</a> in my code.</li>
        <li>There are no CSS errors found by the official <a href="https://jigsaw.w3.org/css-validator/">Jigsaw Validator</a> in my code.</li>
        <li> There are no JavaScript errors fround by <a href="https://jshint.com/">JSHint</a> in my code, however, the following metrics were captured:</li>
<img width="640" alt="Screenshot of JsHint Metrics" src="readmeMedia/jshintMetrics.png">

<h2>Responsiveness</h2>
<p>By pasting my website link into this <a href="https://ui.dev/amiresponsive">online tool</a>, it visually represents how my site looks across different devices.
<img width=640 alt="picture of responsive website tester" src="readmeMedia/amiResponsive.png">

<h1>Deployment</h1>  
	<p>In order to save and publish my website, there were a few steps to take</p>
    <ul>
		<li>In Gitpod, push the final version of my code so it is up to date on GitHub</li>
		<li>Find the repo on GitHub, and go 'settings/pages' and make sure the branch is selected to 'main'.</li>
		<li>Choose the name for the site to be published with and 'save' it.</li>
		<li>From there, a link will be generated for the website and will need a couple minutes to be published.</li>
	</ul>
	<p>This is the link for my <a href="https://t-kingston.github.io/Tic-Tac-Toe/">Game</a> (https://t-kingston.github.io/Tic-Tac-Toe/)
<h1>Credits</h1>
    <h2>Inspiration</h2>
    <ul>
        <li>I took advice from my work colleagues who advised that Tic Tac Toe is a simple, yet effective and easy way to learn JavaScript. Not only that, but it is a project which can be expanded and developed further down the line with more features as my skill set develops.</li>
        <li>There is a colour board app on iPhone called 'Coolors' which visually represents how well different colour schemes work.</li>
         <li>For the popup banner for 'rules' I took inspiration from 'Online Tutorials' on Youtube who made a walkthrough in which I customised the code for my project.</li>
    </ul>
      
<h1>Media</h1>
    <ul>
        <li>Retrived my sound effects from <a href="mixkit.co/free-sound-effects/">Mix Kit</a></li>
        <li>Font from <a href="https://fonts.google.com/">Google Fonts</a></li>
        <li>Favicon Icon from <a href="https://www.pngaaa.com/detail/3480693">Pngaaa.com</a></li>
        <li>Converted the favicon icon from png to .ico using <a href="https://favicon.io/">Favicon.io</a></li>
        <li>The visual device responsiveness image was made at <a href="https://ui.dev/amiresponsive">Am I Responsive</a></li>
    </ul>
