/* 
- write a function that listens for a relevant key-down and returns the data-key
- write a function that adds the playing class to 'data-key="n"' on key-down
- write a function that plays the relevant audio on key-down
- write a function that removes the playing class from 'data-key="n"'
*/
// declare a variable for the key
//const keys = document.querySelectorAll('[data-key]', 'div');
/*let playing = function (key) {
    if (key != "65" || key != "83" || key != "68" || key != "70" || key != "71" || key != "72" || key != "73" || key != "74" || key != "75" || key != "76") {
        return null;
    } else {
        let sample = document.querySelector(`data-key="${key}"`);
        function playSample(sample) {
            sample.play();
        }
        //function addPlayingClass(sample) {
    
        //}
        }
} 

let key = window.addEventListener ('keydown', playing);



//should I put the data-keys in an array?
*/
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop code from running altogether
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
