var number=6;
var colors=generateRandomColor(number);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    number=3;
    colors=generateRandomColor(number);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length; i++){
    	if(colors[i]){
	squares[i].style.background=colors[i];
}else{
	squares[i].style.display = "none";
}
}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    number=6;
    colors=generateRandomColor(number);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length; i++){
	squares[i].style.background=colors[i];
	squares[i].style.display = "block";
}
});

colorDisplay.textContent=pickedColor;
resetbutton.addEventListener("click",function(){
	number=6;
	colors=generateRandomColor(number);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent=" ";
	this.textContent="New Colors";
	for(var i = 0;i < squares.length; i++){
	squares[i].style.background=colors[i];
}
h1.style.background="#232323";
});

 
for(var i = 0;i < squares.length; i++){
	squares[i].style.background=colors[i];
	 squares[i].addEventListener("click", function(){
	 	var temp = this.style.backgroundColor;
		if(temp === pickedColor){
			messageDisplay.textContent="Correct!";
			resetbutton.textContent="Play Again?";

			changeColor(temp);
			h1.style.background = temp;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function changeColor(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	 var random=Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function generateRandomColor(num){
	var arr=[]
	for(var i=0; i < num; i++){
      arr.push(randamColor())
	}
	return arr;
}

function randamColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}