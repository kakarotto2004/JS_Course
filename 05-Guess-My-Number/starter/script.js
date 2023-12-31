'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';

        document.querySelector('.number').textContent = secretNumber;

        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        // if guess higher then secretNumber diplays 'Too low' otherwise display 'Too low'
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too hight!' : 'Too low!';
        displayMessage(guess > secretNumber ? 'Too hight!' : 'Too low!');

        score--;
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = 'You lost the game!';
        displayMessage('You lost the game!');

        document.querySelector('.score').textContent = 0;
    }

    // DRY = dont repeat yourself
    /*else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too hight!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }*/
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start quessing...';
    displayMessage('Start guessing...');

    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
