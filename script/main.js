// make connections to elements on the page using CSS selectors
let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;

// function to reset the puzzle board
function resetPuzzleBoard() {
    puzzlePieces.forEach(piece => {
        // move the puzzle piece back to the left side of the board
        piece.classList.remove('dropped');
        document.querySelector('.puzzle-pieces').appendChild(piece);
    });

    dropZones.forEach(zone => {
        // remove any pieces from the drop zone
        if (zone.children.length > 0) {
            zone.removeChild(zone.children[0]);
        }
    });
}

// function to handle changing the background image
function changeBGImage() {
    resetPuzzleBoard();
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() { 
    console.log('started dragging this piece:', this);

    draggedPiece = this;
}

function handleDragOver(e) { 
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (this.children.length === 0) {
        // remove the piece from its original location
        draggedPiece.parentNode.removeChild(draggedPiece);
        // add the piece to the drop zone
        this.appendChild(draggedPiece);
        draggedPiece.classList.add('dropped');
    }
}

// add event listeners to buttons, puzzle pieces, and drop zones
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("drop", handleDrop);
});
