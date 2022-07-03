const timeLeftDisplay = document.querySelector('#time-left');
const resultDiplay = document.querySelector('#result'); 
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

console.log(squares)
let currentIndex = 76;
const width = 9;

// move frog using event 
function moveFrog(e) {
    switch(e.key) {

        case 'ArrowLeft' :
            console.log('Move left')
            currentIndex -= 1;
            break;

        case 'ArrowRight' :
            console.log('Move right')
            currentIndex += 1;
            break;

        case 'ArrowUp' :
            console.log('Move up')
            currentIndex -= width 
            break;

        case 'ArrowDown' :
            console.log('Move down')
            currentIndex += width
            break;
    }
squares[currentIndex].classList.add('frog');

}
document.addEventListener('keyup', moveFrog)
