
     
   
   //function to confirm if any html audio elements have a data-key matching the datakey of the letter pressed
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        const red = document.getElementById('red');
        const yellow = document.getElementById('yellow');
        const pink = document.getElementById('pink');
        const blue = document.getElementById('blue');
        const orange = document.getElementById('orange');
        const purple = document.getElementById('purple');
        const green = document.getElementById('green');
        if(!audio) return;//stop function running
        audio.currentTime = 0; //resets the audio to beginning to allow for multiple note strikes when audio already playing
        audio.play();
        key.classList.add('playing');//adds the class 'playing' to the element to update the style
        if(e.keyCode === 65) {
            red.classList.add('red');
        } else if(e.keyCode === 83) {
            yellow.classList.add('yellow');
        } else if (e.keyCode ===68) {
            pink.classList.add('pink');
        } else if (e.keyCode ===70) {
            blue.classList.add('blue');
        } else if (e.keyCode ===71) {
            orange.classList.add('orange');
        } else if (e.keyCode ===72) {
            purple.classList.add('purple');
        } else if (e.keyCode ===74) {
            green.classList.add('green');
        }
    };

    
  

    //function to remove class 'playing'
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; //filter to only select transform property, not all other styles
        this.classList.remove('playing','red','yellow','pink','blue','orange','purple','green');//remove class 'playing' from the element
    }

    const keys = document.querySelectorAll('.key'); //to identify all elements with class 'key'
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));//to attach the event listener to each 'key' element and listen for transition end, then run removetransition function
    
    
    window.addEventListener('keydown', playSound);//listening in browser for keyboard press