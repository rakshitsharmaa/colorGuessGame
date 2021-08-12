var numSquare=6;
var color =randomColorArray(numSquare);
var reset = document.querySelector("#reset");
var messageDisplay=document.querySelector("#message");
var square =document.querySelectorAll(".bessil");
var hi = document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquare=3;
    color=randomColorArray(numSquare);
    pickedColor=colorPicker();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        if(color[i]){
        square[i].style.background=color[i];
        }
        else{
        square[i].style.display="none";
        }
    }
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare=6;
    color=randomColorArray(numSquare);
    pickedColor=colorPicker();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        square[i].style.background=color[i];
        square[i].style.display="block";
    }
})
for(var i=0;i<square.length;i++){
    square[i].style.background=color[i];
    square[i].addEventListener("click",function(){
        if (this.style.background===pickedColor) {
            messageDisplay.textContent="correct";
            changeColor(this.style.background);
            hi.style.background=this.style.background;
            reset.textContent="play Again?";
        }
        else{
        this.style.background= "#2f4f4f";
            messageDisplay.textContent="try again";

        }
    })
}
var colorDisplay=document.getElementById("colorDisplay");
var pickedColor=colorPicker();
colorDisplay.textContent=pickedColor;
function changeColor(pColor){
    for (let i = 0; i < square.length; i++) {
          square[i].style.background= pColor;       
    }
}
function colorPicker(){
    var random=Math.floor(Math.random()*color.length);
    return color[random];
}
function randomColorArray(num){
    var array =[];
    for(var i=0;i<num;i++){
    array.push(randomColor());
    }
    return array;
}
function randomColor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
reset.addEventListener("click",function(){
    color=randomColorArray(numSquare);
    pickedColor=colorPicker();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        square[i].style.background=color[i];
    }
    hi.style.background="#2f4f4f";
    messageDisplay.textContent="";
    reset.textContent="New Colors"; 
});