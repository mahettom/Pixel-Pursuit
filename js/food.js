class Food {
    constructor(grid) {
        this.grid = grid;
        this.currentPosition = this.getRandomIndex()
    }
    getRandomIndex() {
        // return Math.floor(Math.random() * this.grid.length);

        // if the food spawn to much higher in the playground
        // enemies can spawn on you so big thanks to MDN
        const max = this.grid.length;
        const min = 60;

        return Math.floor(Math.random() * (max - min + 1)) + min;
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