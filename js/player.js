class Player {
    constructor(currentPosition, grid) {
        this.currentPosition = currentPosition;
        this.grid = grid;
        this.life = 3;
    }

    displayPlayer() {
        this.grid[this.currentPosition].classList.add('player');
    }
    hidePlayer() {
        this.grid[this.currentPosition].classList.remove('player');
    }
}

export default Player