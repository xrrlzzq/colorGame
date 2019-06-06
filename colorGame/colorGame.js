var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var button=document.querySelectorAll(".mode");
init();
function init(){
   

   setupModeButton();
   setupSquare();

    reset();
}
function setupModeButton(){
    for(var i=0;i<button.length;i++){
    
        button[i].addEventListener("click",function(){
            button[0].classList.remove("selected");
            button[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="easy")
                numSquares=3;
            else{
                numSquares=6;
            }
            reset();
        });
    }
}
function setupSquare(){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    
        squares[i].addEventListener("click",function(){
    
            var curColor=this.style.backgroundColor;
            if(curColor===pickedColor){
                messageDisplay.textContent="Correct!";
                resetButton.textContent="Play Again!";
                changeColor(pickedColor);
                h1.style.backgroundColor=pickedColor;
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again!";
            }
        });
    }
}
function reset(){
    
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    for(var i=0;i<squares.length;i++){
     if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
     }
     else
        squares[i].style.display="none";
    }
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
}
// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");

// easyBtn.addEventListener("click",function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares=3;
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//         }
//         else{
//             squares[i].style.display="none";
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares=6;
//     colors=generateRandomColors(numSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;
//     for(var i=0;i<squares.length;i++){
        
//         squares[i].style.display="block";
//         squares[i].style.backgroundColor=colors[i];
//     }
// });

resetButton.addEventListener("click",function(){
       
       colors=generateRandomColors(numSquares);
       pickedColor=pickColor();
       colorDisplay.textContent=pickedColor;
       h1.style.backgroundColor="steelblue";
       for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
       }
       messageDisplay.textContent="";
       resetButton.textContent="New Colors";
});


function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var index=Math.floor(Math.random()*numSquares);
    return colors[index];
}

function generateRandomColors(num){
    var arrays=[];
    for(var i=0;i<num;i++){
        arrays.push(randomColor());
    }
    return arrays;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}