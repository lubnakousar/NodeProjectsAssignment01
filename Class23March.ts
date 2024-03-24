import readline from 'readline';

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define constants
const MAX_SCORE = 5;

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to simulate computer's paddle movement
function computerMove(): number {
    // 50% chance to move up, 50% chance to move down
    return Math.random() < 0.5 ? -1 : 1;
}

// Function to handle player's move
function handlePlayerMove(input: string): void {
    if (input.toLowerCase() === 'w') {
        playerMove(-1);
    } else if (input.toLowerCase() === 's') {
        playerMove(1);
    } else {
        console.log("Invalid input! Use 'w' to move up and 's' to move down.");
        rl.prompt();
    }
}

// Function to update player's paddle position and check for collisions
function playerMove(direction: number): void {
    playerPaddlePos += direction;
    playerPaddlePos = Math.min(Math.max(playerPaddlePos, 1), 10); // Limit paddle position within bounds
    checkCollision();
}

// Function to update ball position and check for collisions
function updateBallPosition(): void {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check for collision with player paddle
    if (ballX === 2 && ballY >= playerPaddlePos && ballY <= playerPaddlePos + 2) {
        ballSpeedX *= -1;
    }

    // Check for collision with computer paddle
    if (ballX === 18 && ballY >= computerPaddlePos && ballY <= computerPaddlePos + 2) {
        ballSpeedX *= -1;
    }

    // Check for collision with top or bottom wall
    if (ballY === 1 || ballY === 20) {
        ballSpeedY *= -1;
    }

    // Check for scoring
    if (ballX === 1) {
        computerScore++;
        if (computerScore >= MAX_SCORE) {
            console.log("Computer wins!");
            rl.close();
            return;
        }
        resetBall();
    } else if (ballX === 19) {
        playerScore++;
        if (playerScore >= MAX_SCORE) {
            console.log("Player wins!");
            rl.close();
            return;
        }
        resetBall();
    }
}

// Function to reset ball position and speed
function resetBall(): void {
    ballX = 10;
    ballY = 10;
    ballSpeedX *= -1;
    ballSpeedY = getRandomInt(-1, 1);
}

// Function to display game state
function displayGameState(): void {
    console.clear();
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    console.log('='.repeat(20));
    for (let row = 1; row <= 20; row++) {
        let line = '';
        for (let col = 1; col <= 20; col++) {
            if (row === 1 || row === 20) {
                line += '=';
            } else if (row === ballY && col === ballX) {
                line += 'O';
            } else if (col === 2 && (row === playerPaddlePos || row === playerPaddlePos + 1 || row === playerPaddlePos + 2)) {
                line += '|';
            } else if (col === 18 && (row === computerPaddlePos || row === computerPaddlePos + 1 || row === computerPaddlePos + 2)) {
                line += '|';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

// Initialize game variables
let playerPaddlePos = 9;
let computerPaddlePos = 9;
let ballX = 10;
let ballY = 10;
let ballSpeedX = -1;
let ballSpeedY = getRandomInt(-1, 1);

// Function to check for collisions
function checkCollision(): void {
    // Check for collision with top or bottom wall
    playerPaddlePos = Math.min(Math.max(playerPaddlePos, 1), 10);
}

// Function to update computer's paddle position
function updateComputerPaddle(): void {
    if (ballY < computerPaddlePos) {
        computerPaddlePos--;
    } else if (ballY > computerPaddlePos + 1) {
        computerPaddlePos++;
    }
}

// Main game loop
function gameLoop(): void {
    displayGameState();
    updateBallPosition();
    updateComputerPaddle();
    if (playerScore < MAX_SCORE && computerScore < MAX_SCORE) {
        rl.question("Use 'w' to move up and 's' to move down: ", handlePlayerMove);
    }
}

// Start the game loop
gameLoop();
