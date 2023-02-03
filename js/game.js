import Player from "./player.js";
import Food from "./food.js";
import Enemy from "./enemy.js";

// button and information related to the game
const startGame = document.querySelector('.bring-it-button');
let score = document.querySelector('#score');
const endGame = document.querySelector('#end-of-game');
const reset = document.querySelector('.reset-button')

// other element of the body
let playground = document.querySelector('#playground');
const firstPage = document.querySelector('.bring-it-div');


startGame.addEventListener('click', (event) => {
    startGame.classList.remove('bring-it-button');
    firstPage.classList.remove('bring-it-div');

    startGame.classList.add('hidden');
    firstPage.classList.add('hidden');
})

// score.textContent = score;

class Game {
    constructor(currentPosition) {
        this.column = 20;
        this.row = 20;
        this.grid = [];
        this.player = null;
        this.food = null;
        this.enemies = [];
        this.init();
        this.isGameOver = false;
        this.timeOutID = null;
        this.score = 0;
        this.delay = 1000;
        window.addEventListener('keydown', (e) => this.handleMovement(e));
    }

    init() {
        this.gridPlayground();
        this.player = new Player(0, this.grid);
        this.player.displayPlayer();
        this.food = new Food(this.grid);
        this.food.displayFood();
    }

    createCellForPlayground() {
        const cell = document.createElement('div');
        cell.classList.add('cells');
        playground.append(cell);
        this.grid.push(cell);
    }

    gridPlayground() {
        for (let i = 0; i < this.row * this.column; i++) {
            this.createCellForPlayground();
        }
    }

    handleMovement(event) {

        switch (event.code) {
            case 'ArrowLeft':
                if (this.player.currentPosition % 20 === 0) {
                    return;
                }

                this.player.hidePlayer();
                this.player.currentPosition--;
                this.player.displayPlayer();

                break;

            case 'ArrowRight':
                if ((this.player.currentPosition + 1) % 20 === 0) {
                    return;
                }
                this.player.hidePlayer();
                this.player.currentPosition++;
                this.player.displayPlayer();

                break;

            case 'ArrowUp':
                if (this.player.currentPosition < 20) {
                    return;
                }
                this.player.hidePlayer();
                this.player.currentPosition -= 20;
                this.player.displayPlayer();

                break;

            case 'ArrowDown':
                if (this.player.currentPosition >= 380) {
                    return;
                }
                this.player.hidePlayer();
                this.player.currentPosition += 20;
                this.player.displayPlayer();
                break;
        }

        const isPlayerHittingEnemy = this.grid[this.player.currentPosition].classList.contains('enemy');
        if (isPlayerHittingEnemy) {
            this.gameOver('lose');
        }

        // logic to put in place when 1 objectif is reached
        if (this.player.currentPosition === this.food.currentPosition) {
            this.food.eatFood();
            this.score++;
            score.textContent = this.score


            if (this.delay >= 215) {
                this.delay -= 70;
            }

            //add style when dificulty increase
            // if (this.score === 12) {

            // }
            
            if (this.score === 20) {
                this.gameOver('win');
            }


            if (!this.timeOutID) {
                this.startEnemies();
            }
        }
    }

    startEnemies() {
        this.timeOutID = setTimeout(() => {

            this.enemies.push(new Enemy(this.grid))

            this.enemies.forEach(enemy => {
                enemy.move()

                if (enemy.checkCollision()) {
                    this.gameOver('lose')

                }
            });
            if (!this.isGameOver) {
                this.startEnemies()
            }
        }, this.delay)
    }

    gameOver(result) {
        this.isGameOver = true;
        let msg = "lose";

        if (result === 'win') {
            msg = "win";
        }

        endGame.querySelector('p').textContent = msg;
        endGame.show();

        reset.addEventListener('click', () => this.reset());
    }

    reset() {

        
        startGame.classList.remove('hidden')
        endGame.close();
        playground.innerHTML = '';
        this.grid = [];
        this.enemies = [];
        this.player = null;
        this.food = null;
        this.isGameOver = false;
        this.timeOutID = null;
        this.score = 0;
        this.delay = 1000;
        score.textContent = this.score
        this.init();
    }
}

const game1 = new Game();