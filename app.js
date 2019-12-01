window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual =document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#276988',
        '#d3609f',
        '#b4d360',
        '#9889c0',
        '#c28744'
    ]; 
// adding sounds
pads.forEach((pad,index) =>{
    pad.addEventListener('click',function(){
        sounds[index].currentTime = 0;
         sounds[index].play();
        
        createBubbles(index);
    });
});
 //create bubbles 
 const createBubbles =(index) => {
     const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
       bubble.style.animation = 'jump 1s ease';
       bubble,addEventListener('animated',function(){
           visual.removeChild(this)
       })

 };
});
