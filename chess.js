let Pieces = class {
    
    constructor(piece, place){
        const None = 0;
        const King = 1;
        const Pawn = 2;
        const Knight = 3;
        const Bishop = 4;
        const Rook = 5;
        const Queen = 6;

        const White = 8;
        const Black = 16;
        this.type = pieceType(piece);
        this.color = pieceColor(piece);

        
    }

    pieceColor(piece){
        piece == piece.toUpperCase ? this.color = Black : this.color = White
    }
    
    pieceType(piece){
        
        piece.toLowerCase();
        switch(piece){
            case(piece == k): this.type = King;
            case(piece == q): this.type = Queen;
            case(piece == r): this.type = Rook;
            case(piece == n): this.type = Knight;
            case(piece == b): this.type = Bishop;
            case(piece == p): this.type = Pawn;
            default: this.type = None;
        }
    }
}