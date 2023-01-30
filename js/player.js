class Player {
    constructor (currentposition){
        this.currentposition = 780;
    }

    displayPlayer(position){
        grid[position].classList.add('player');
    }
}

window.addEventListener('keydown', (event) => {
        
    switch (event.code) {
        case 'ArrowLeft':
            if (currentPosition % 20 === 0){
                return
            }
    }
})

function hidePlayer(){
    grid[this.currentPosition].classlist.remove('player');
}