// Your code here
const block = document.getElementById('dodger');
block.style.backgroundColor = '#FF69B4';

document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
       moveDodgerLeft();
        
    }
    else if(event.key === "ArrowRight"){
        moveDodgerRight();
        
    }
    else if(event.key === "ArrowUp"){
        moveDodgerUp();
       
    }
    else if(event.key === "ArrowDown"){
        moveDodgerDown();
        
    }

});
function moveDodgerLeft(){
    const leftPos = block.style.left.replace("px","");
    const left = parseInt(leftPos,10);
    if(left>0){
        block.style.left = `${left-1}px`;
    }
}

function moveDodgerRight(){
    const rightPos = block.style.left.replace("px","");
    const right = parseInt(rightPos,10);
    if(right<360){
        block.style.left = `${right+1}px`;
    }
}

function moveDodgerUp(){
    const topPos = block.style.bottom.replace("px","");
    const top = parseInt(topPos,10);
    if(top < 380){
        block.style.bottom = `${top+1}px`;
    }
}

function moveDodgerDown(){
    const downPos = block.style.bottom.replace("px","");
    const down = parseInt(downPos,10);
    if(down > 0){
        block.style.bottom = `${down-1}px`;
    }
}