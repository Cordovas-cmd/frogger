const timeLeftDisplay = document.querySelector('#time-left');
const resultDiplay = document.querySelector('#result'); 
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');

console.log(squares)
let currentIndex = 76;
const width = 9;

// move frog using event 
function moveFrog(e) {

    squares[currentIndex].classList.remove('frog');

    // modulus operator.
    switch(e.key) {

        case 'ArrowLeft' :
            console.log('Move left')
            console.log(currentIndex)
            if (currentIndex % width !== 0)currentIndex -= 1;
            break;

        case 'ArrowRight' :
            console.log('Move right')
            console.log(currentIndex)

            if (currentIndex % width < width -1) currentIndex += 1;
            break;

        case 'ArrowUp' :
            console.log('Move up')
            console.log(currentIndex)

            if(currentIndex -width >= 0 )currentIndex -= width 
            break;

        case 'ArrowDown' :
            console.log('Move down')
            console.log(currentIndex)

            if (currentIndex + width < width * width) currentIndex += width
            break;
    }
squares[currentIndex].classList.add('frog');

}
document.addEventListener('keyup', moveFrog)


function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
        logLeft.classList.remove('l1')
        logLeft.classList.add('l2')
        break
    }
}

setInterval(autoMoveLogs, 1000)
