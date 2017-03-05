//*****VARIABLES*****

var pageHeader = document.getElementById("page-header");
var pageTitle = document.getElementById("page-title");
var keypressInput = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var makeLarge = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");
var outputTarget = document.getElementById("output-target");

//*****FUNCTIONS*****

document.addEventListener("click", function(e){
	writeToOutputTarget(e.target.innerText);
});

pageTitle.addEventListener("mouseover", function(){
	outputTarget.innerHTML = 'You moved your mouse over the header';
});

pageTitle.addEventListener("mouseout", function(){
	outputTarget.innerHTML = 'You left me!!';
});

keypressInput.addEventListener("keypress", function(e){
	outputTarget.innerHTML = e.target.value;
});

addColor.addEventListener("click", function(){
	guineaPig.classList.add("add-color");
});

makeLarge.addEventListener("click", function(){
	guineaPig.classList.add("make-large");
});

addBorder.addEventListener("click", function(){
	guineaPig.classList.add("add-border");
});

addRounding.addEventListener("click", function(){
	guineaPig.classList.add("add-rounding");
});

//*****OUTPUT TARGET TEXT*****

function writeToOutputTarget(text){
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};

