const timeLeftDisplay = document.querySelector('#time-left');
const resultDiplay = document.querySelector('#result'); 
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');


function moveFrog() {
 console.log('moved')

}
document.addEventListener('keyup', moveFrog)
