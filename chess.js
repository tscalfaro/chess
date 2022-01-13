var b_Bishop = "./public/blue-bishop-t.png";
var b_King = "./public/blue-king-t.png";
var b_Queen = "./public/blue-queen-t.png";
var b_Knight = "./public/blue-knight-t.png";
var b_Rook = "./public/blue-rook-t.png";
var b_Pawn = "./public/blue-pawn-t.png";

var w_Bishop = "./public/white-bishop-t.png";
var w_King = "./public/white-king-t.png";
var w_Queen = "./public/white-queen-t.png";
var w_Knight = "./public/white-knight-t.png";
var w_Rook = "./public/white-rook-t.png";
var w_Pawn = "./public/white-pawn-t.png";

//when considered in binary the pieces will still be identifiable hence why white and black are 8 & 16; 
const None = 0;
const King = 1;
const Pawn = 2;
const Knight = 3;
const Bishop = 4;
const Rook = 5;
const Queen = 6;

const White = 8;
const Black = 16;

class Pieces {
  constructor(piece, place) {
    this.pieceType(piece);
    this.pieceColor(piece);
    this.piecePlace(place);
    this.pieceImage();
    this.placePiece();
    this.moveStyle();
  }

  pieceColor(piece) {
    piece == piece.toUpperCase() ? this.color = Black : this.color = White
  }

  pieceType(piece) {
    piece = piece.toLowerCase();
    if (piece === 'k') this.type = King;
    if (piece === 'q') this.type = Queen;
    if (piece === 'n') this.type = Knight;
    if (piece === 'b') this.type = Bishop;
    if (piece === 'r') this.type = Rook;
    if (piece === 'p') this.type = Pawn;
  }

  piecePlace(place) {
    this.place = place;
  }

  placePiece() {
    let testPlace = document.getElementById(this.place)
    testPlace.innerHTML = `<img src=${this.image} class='piece' />`
    
  }

  pieceImage() {
    if (this.color === White) {
      if (this.type === King) this.image = w_King;
      if (this.type === Queen) this.image = w_Queen
      if (this.type === Knight) this.image = w_Knight
      if (this.type === Bishop) this.image = w_Bishop
      if (this.type === Rook) this.image = w_Rook
      if (this.type === Pawn) this.image = w_Pawn
      
    } else {
      if (this.type === King) this.image = b_King;
      if (this.type === Queen) this.image = b_Queen
      if (this.type === Knight) this.image = b_Knight
      if (this.type === Bishop) this.image = b_Bishop
      if (this.type === Rook) this.image = b_Rook
      if (this.type === Pawn) this.image = b_Pawn
    }
  }

  moveStyle(){
    if(this.type === 2){
      this.movement = 'Pickup';
    } else {
      this.movement = 'Dragable';
    }
  }
}

class Board {
  constructor() {
    this.board = []
    this.blackSet = [];
    this.whiteSet = [];
    this.populateBlackSet()
    this.populateWhiteSet()

    for(let i = 0; i < this.blackSet.length; i++){
        this.board[this.blackSet[i].place] = this.blackSet[i]
    }

    for(let i = 0; i < this.whiteSet.length; i++){
      this.board[this.whiteSet[i].place] = this.whiteSet[i]
     }
    
  }

  populateBlackSet(){
    let j = 0;
    for (let i = 0; i < 16; i++) {
      if(i === 0) this.blackSet[i] = new Pieces('K', 59)
      if(i === 1) this.blackSet[i] = new Pieces('Q', 60)
      if(i === 2) this.blackSet[i] = new Pieces('B', 61)
      if(i === 3) this.blackSet[i] = new Pieces('B', 58)
      if(i === 4) this.blackSet[i] = new Pieces('N', 57)
      if(i === 5) this.blackSet[i] = new Pieces('N', 62)
      if(i === 6) this.blackSet[i] = new Pieces('R', 56)
      if(i === 7) this.blackSet[i] = new Pieces('R', 63)
      if(i > 7){ 
          this.blackSet[i] = new Pieces("P", 48 + j);
          j++;
        }
      }
    }

    populateWhiteSet() {
      let j = 0;
      for (let i = 0; i < 16; i++) {
        if(i === 0) this.whiteSet[i] = new Pieces('k', 3)
        if(i === 1) this.whiteSet[i] = new Pieces('q', 4)
        if(i === 2) this.whiteSet[i] = new Pieces('b', 2)
        if(i === 3) this.whiteSet[i] = new Pieces('b', 5)
        if(i === 4) this.whiteSet[i] = new Pieces('n', 1)
        if(i === 5) this.whiteSet[i] = new Pieces('n', 6)
        if(i === 6) this.whiteSet[i] = new Pieces('r', 0)
        if(i === 7) this.whiteSet[i] = new Pieces('r', 7)
        if(i > 7){ 
            this.whiteSet[i] = new Pieces("p", 8 + j);
            j++;
          }
        }
        console.log(this.whiteSet)
    }
    
  }

let origBoard = new Board();
startGame();

function startGame() {
  origBoard = new Board();
  //If turn = true White turn
  let turn = true;
  let Player1 = White;
  let Player2 = Black;

  if (turn) {

  } else {

  }
}

