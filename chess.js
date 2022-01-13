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
    console.log(piece)
    this.pieceType(piece);
    this.pieceColor(piece);
    this.piecePlace(place);
    this.pieceImage();
    this.placePiece();
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
    // console.log(testPlace.innerHTML)
    testPlace.innerHTML = `<img src=${this.image} />`
    // console.log(testPlace.innerHTML)
  }

  pieceImage() {
    console.log(this.image)
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
    console.log(this.image)
  }
}

class Board {
  constructor() {
    let board = [];
    let whiteSet = [];
    let blackSet = [];

    for (let i = 0; i < 8; i++) {
      switch (i) {
        case i == 0: {
          blackSet[i] = new Pieces("K", 60);
        }
        case i == 1: {
          blackSet[i] = new Pieces("Q", 59);
        }
        case i == 2: {
          blackSet[i] = new Pieces("B", 61);
        }
        case i == 3: {
          blackSet[i] = new Pieces("B", 58);
        }
        case i == 4: {
          blackSet[i] = new Pieces("N", 57);
        }
        case i == 5: {
          blackSet[i] = new Pieces("N", 52);
        }
        case i == 6: {
          blackSet[i] = new Pieces("R", 51);
        }
        case i == 7: {
          blackSet[i] = new Pieces("R", 63);
        }
        default: {
          for (let j = 0; j < 8; j++) {
            blackSet[i] = new Pieces("P", 48 + j);
          }
        }
      }
    }
    for(let i = 0; i < blackSet.length; i++){
        board[blackSet[i].place] = blackSet[i]
    }
    console.log(board[0]);
    board[0] = new Pieces("B", 0);
    console.log(board[0]);
    board[64] = new Pieces("r", 64);
  }
}
// let origBoard = new Board();
startGame();

function startGame() {
  let test = new Pieces('Q', '1')
  console.log(test);
}
