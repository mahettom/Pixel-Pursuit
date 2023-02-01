import Player from "./player.js";
import Food from "./food.js";

let playground = document.querySelector('#playground');
// const gameStart = document.querySelector('#start');
// const score = document.querySelector('#life');

class Game {
    constructor(currentPosition) {
        this.column = 20;
        this.row = 20;
        this.grid = [];
        this.points = 0;
        this.player = null;
        this.food = null;
        this.init();
    }
    init() {
        this.gridPlayground()
        this.player = new Player(0, this.grid)
        this.player.displayPlayer()
        this.food = new Food(Math.floor(Math.random() * this.grid.length), this.grid)
        this.food.displayFood()
        window.addEventListener('keydown', (event) => this.handleMovement(event))
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

    eatPart() {
        
    }

    handleMovement(event) {
        // console.log(this)
        // console.log(event)
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
                break

            case 'ArrowDown':
                if (this.player.currentPosition >= 380) {
                    return;
                }
                this.player.hidePlayer();
                this.player.currentPosition += 20;
                this.player.displayPlayer()
                break
        }

    }



}

const game1 = new Game()
