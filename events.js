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

// When the mouse is over the h1 tag, the output element should 
//contain the text "You moved your mouse over the header".
//***mouseover

pageTitle.addEventListener("mouseover", function(){
	outputTarget.innerHTML = 'You moved your mouse over the header';
});




// When the mouse leaves the h1 tag, the output element should 
//contain the text "You left me!!".
//***mouseout

// When you type characters into the input field, the output 
//element should mirror the text in the input field.

// When you click the "Add color" button, the guinea-pig element's 
//text color should change to blue.
//***click/button



// When you click the "Hulkify" button, the guinea-pig element's 
//font size should become much larger.
//***click/button



// When you click the "Capture it" button, the guinea-pig element 
//should have a border added to it.
//***click/button



// When you click the "Rounded" button, the guinea-pig element's 
//border should become rounded.
//***click/button

//*****OUTPUT TARGET TEXT*****

function writeToOutputTarget(text){
	outputTarget.innerHTML = 'You clicked on the ' + text + ' section';
};

