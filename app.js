const timeLeftDisplay = document.querySelector('#time-left');
const resultDiplay = document.querySelector('#result'); 
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

console.log(squares)
let currentIndex = 76;

// move frog using event 
function moveFrog(e) {

    switch(e.key) {
        case 'ArrowLeft' :
        console.log('Move left')
        break
        case 'ArrowRight' :
        console.log('Move right')
        break
        case 'ArrowUp' :
        console.log('Move up')
        break
        case 'ArrowDown' :
        console.log('Move down')
        break
    }
squares[currentIndex].classList.add('frog');

}
document.addEventListener('keyup', moveFrog)
