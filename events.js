//*****VARIABLES*****
var document.getElementById("page-header");
var document.getElementById("page-title");
var document.getElementById("output-target");
var document.getElementById("guinea-pig");
var document.getElementById("add-color");
var document.getElementById("make-large");
var document.getElementById("add-border");
var document.getElementById("add-rounding");

//*****FUNCTIONS*****

document.addEventListener("click", function(e){
	writeToOutputTarget(e.target.innerText);
});






// When any section is clicked the output target text should be 
//"You clicked on the {text of the section} section"
//***click


// When the mouse is over the h1 tag, the output element should 
//contain the text "You moved your mouse over the header".
//***mouseover


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

document.addEventListener("click", function(e){

});

// When you click the "Capture it" button, the guinea-pig element 
//should have a border added to it.
//***click/button



// When you click the "Rounded" button, the guinea-pig element's 
//border should become rounded.
//***click/button




