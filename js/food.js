class Food {
    constructor(grid) {
        this.grid = grid;
        this.currentPosition = this.getRandomIndex()
    }
    getRandomIndex() {
        return Math.floor(Math.random() * this.grid.length);
    }
    displayFood() {
        this.grid[this.currentPosition].classList.add('food');
    }
    hideFood() {
        this.grid[this.currentPosition].classList.remove('food');
    }
    eatFood() {
        this.hideFood()
        this.currentPosition = this.getRandomIndex()
        this.displayFood()
    }
}

export default Food