export{ castleBlack, castleWhite}


/** Castle directions as enum */
export const enum CastleDirection{
    Long = 0,
    Short = 1,
}

//Short Function for checking peice type

export namespace CheckIf{
    export const isPawn =  (piece: string) => (piece.toLowerCase() === "p");
    export const isRock =  (piece: string) => (piece.toLowerCase() === "r" );
    export const isKnight =  (piece: string) => (piece.toLowerCase() === "n" );
    export const isBishop =  (piece: string) => (piece.toLowerCase() === "b" );
    export const isQueen =  (piece: string) => (piece.toLowerCase() === "q" );
    export const isKing  =  (piece: string) => (piece.toLowerCase() === "k" );
}

let test:boolean = CheckIf.isBishop("d")

const isPawn =  (piece: string) => (piece.toLowerCase() === "p");
const isRock =  (piece: string) => (piece.toLowerCase() === "r" );
const isKnight =  (piece: string) => (piece.toLowerCase() === "n" );
const isBishop =  (piece: string) => (piece.toLowerCase() === "b" );
const isQueen =  (piece: string) => (piece.toLowerCase() === "q" );
const isKing  =  (piece: string) => (piece.toLowerCase() === "k" );





//More complex move function

function castleWhite(board: string[], direction: CastleDirection):void{}


function castleBlack(board: string[], direction: CastleDirection):void{}


function getMoves(index: number, piece:string,): string[]{return []}
