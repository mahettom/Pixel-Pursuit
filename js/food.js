class Food {
    constructor(currentPosition, grid){
        this.currentPosition = currentPosition;
        this.grid = grid;
    }
    displayFood(){
        console.log(this.currentPosition);
        this.grid[this.currentPosition].classList.add('food');
    }
    hideFood(){
        this.grid[this.currentPosition].classList.remove('food');
    }
}

export default Food