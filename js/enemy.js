class Enemy {
    constructor(grid) {
        this.grid = grid;
        this.currentPosition = this.getRandomIndex()
    }
    getRandomIndex() {
        return Math.floor(Math.random() * 19);
    }
    displayEnemy() {
        this.grid[this.currentPosition].classList.add('enemy');
    }
    hideEnemy() {
        this.grid[this.currentPosition].classList.remove('enemy');
    }
    move() {
        this.hideEnemy()
        this.currentPosition += 20
        this.displayEnemy()
    }
}

export default Enemy