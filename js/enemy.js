class Enemy {
    constructor(grid) {
        this.grid = grid;
        this.currentPosition = this.getRandomIndex()
    }
    getRandomIndex() {
        return Math.floor(Math.random() * 19);
    }
    displayEnemy() {
        if (this.grid[this.currentPosition]) {
            this.grid[this.currentPosition].classList.add('enemy');
        }
    }
    hideEnemy() {
        if (this.grid[this.currentPosition]) {
            this.grid[this.currentPosition].classList.remove('enemy');
        }
    }
    move() {
        this.hideEnemy()
        this.currentPosition += 20
        this.displayEnemy()
    }

    checkCollision() {
        if (this.grid[this.currentPosition].classList.contains('player')) {
            return true;
        }
    }
}

export default Enemy