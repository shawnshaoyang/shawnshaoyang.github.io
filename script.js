function playAudio() { 
    let elements = document.querySelector('.is-active');
    console.log(elements.classList);
    console.log(elements.classList[1]);
    document.getElementById("myAudio").play(); 
    elements.classList.remove('is-active');
  } 

