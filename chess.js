var b_Bishop = "./public/blue-bishop-t";
var b_King = "./public/blue-king-t";
var b_Queen = "./public/blue-queen-t";
var b_Knight = "./public/blue-knight-t";
var b_Rook = "./public/blue-rook-t";
var b_Pawn = "./public/blue-pawn-t";

var w_Bishop = "./public/white-bishop-t";
var w_King = "./public/white-king-t";
var w_Queen = "./public/white-queen-t";
var w_Knight = "./public/white-knight-t";
var w_Rook = "./public/white-rook-t";
var w_Pawn = "./public/white-pawn-t";
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
    piece.toLowerCase();
    switch (piece) {
      case piece == "k":
        this.type = King;
      case piece == "p":
        this.type = Pawn;
      case piece == "n":
        this.type = Knight;
      case piece == "b":
        this.type = Bishop;
      case piece == "r":
        this.type = Rook;
      case piece == "q":
        this.type = Queen;
      default:
        this.type = None;
    }
    // pieceType(piece);
    this.color = Black;
    // pieceColor(piece);
    this.place = 0;
    // piecePlace(place);

    // pieceImage();
    // placePiece();
  }

  pieceColor(piece) {
    piece == piece.toUpperCase ? (this.color = Black) : (this.color = White);
  }

  pieceType(piece) {}

  piecePlace(place) {
    this.place = place;
  }

  placePiece() {
    document.getElementById(this.place).innerHTML =
      "<img src=require('./public/blue-bishop-t')";
  }

  pieceImage() {
    if (this.color == White) {
      switch (this.piece) {
        case King:
          this.image = w_King;
        case Queen:
          this.image = w_Queen;
        case Bishop:
          this.image = w_Bishop;
        case Knight:
          this.image = w_Knight;
        case Rook:
          this.image = w_Rook;
        case Pawn:
          this.image = w_Pawn;
      }
    } else {
      switch ((this.color, this.piece)) {
        case King:
          this.image = w_King;
        case Queen:
          this.image = w_Queen;
        case Bishop:
          this.image = w_Bishop;
        case Knight:
          this.image = w_Knight;
        case Rook:
          this.image = w_Rook;
        case Pawn:
          this.image = w_Pawn;
      }
    }
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
          board[i]
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
    console.log(board[0]);
    board[0] = new Pieces("B", 0);
    console.log(board[0]);
    board[64] = new Pieces("r", 64);
  }
}
let origBoard = new Board();
startGame();

function startGame() {
  console.log();
}
