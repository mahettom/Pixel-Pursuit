// SELECTION OF HTML ELEMENT

this.playground = document.querySelector('#playground');
// const gameStart = document.querySelector('#start');
// const score = document.querySelector('#life');

class Game {
    constructor() {
        this.column = 20;
        this.row = 40;
        this.grid = [];
        this.currentPosition = 90;
        this.points = 0;
        this.life = 3;
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

    // METHOD FOR PLAYER
    // displayPlayer(position){
    //     grid[position].classList.add('player');
    // }
}

// FUNCTION FOR PLAYER
// function hidePlayer(){
//     grid[this.currentPosition].classlist.remove('player');
// }

const game1 = new Game()
game1.gridPlayground()