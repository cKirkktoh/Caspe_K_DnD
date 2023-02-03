// select your elements first - what is the user going to interact with?
// there are the targets => these are what the "user" uses
// this is a 1 to 1 connection to an element is the DOM
//let navButton = document.querySelector("#navButton");

// this is a 1 to many connection to elements in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect the draggable pieces
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	// collect ALL of th drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	// set up a global variable to store a reference to the dragged piece
	// i need to know this later when I drop it on a zone
	draggedPiece;

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage () {	
	let newBGPath = "images/backGround" + this.id + ".jpg";

	// change the background image in the drop zone
	// the `${}` is called a JavaScript Template String - whatever is inside the curly
	// braces os evaluated at runtime and interpolated (relpaces the bracket notation)
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
	console.log('started dragging a piece!', this);
	// store element I am currently dragging in that global draggedPiece variable
	draggedPiece = this;
}

function handleDragOver(e) { 
	// block the default behaviour
	e.preventDefault();
	console.log('dragging over me!'); 
}

function handleDrop(e) {
	// block the default behaviour
	e.preventDefault();
	// and then do whatever you want.
	console.log('dropped on me!');
	e.target.appendChild(draggedPiece);
	
}

// event handling at the bottom -> how things react when you
// how is the user going to interact with the elements / controls you provide?

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover hnadling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) { // e is shorthand of event -> in this case the nav event 
	// don't let the default behaviour of certain elements happen - block it
	e.preventDefault();
}

// temp Handling
tempLink.addEventListener('click', blockDefaultBehaviour)