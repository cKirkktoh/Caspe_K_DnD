// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element is the DOM
//let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1');
	puzzleBoard = document.querySelector('.puzzle-board')

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage () {	
	let newBGPath = "images/backGround" + this.id + ".jpg";

	// change the background image in the drop zone
	// the `${}` is called a JavaScript Template String - whatever is inside the curly
	// braces os evaluated at runtime and interpolated (relpaces the bracket notation)
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// event handling at the bottom -> how things react when you
// how is the user going to interact with the elements / controls you provide?

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));