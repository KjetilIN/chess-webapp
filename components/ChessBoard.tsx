import React from 'react'


// This is the interface of a chess engine
interface chessEngine{
    getEval(board: string[]): number; // Gets the evaluation of the position, based on the state of the board. 
    getBestMove(board: string[]): string[]; // Get the best move based on the current state of the board. 
}

interface Props {
    type: string; // type of board 
    size: number; // size of the square
    light?: string; // light color of the square
    dark?: string; // datk color of the suare 
    board: (string|null)[]; // state as a list of peices 
    chessEngine?: chessEngine;
}


export const ChessBoard: React.FC<Props> = ({ size , light, dark, board}) => {
    light = light ? light : "white"
    dark = dark ? dark : "gray"

    // Given an index of the sqaure (0 -> 63) calculate x and y coordinate
    // For white squares, the x and y coordinate are either both odd or both even
    // For black squares, one coordinate is odd, while the other is even
    function getColor(index: number) : any {
        const x = index % 8
        const y = Math.floor(index / 8)
        return (x % 2 === y % 2) ? light : dark
    }


    // This function is coniditionally called, meaning no null check for piece is necessary
    function getImage(piece:string, index:number): JSX.Element {
        return (<img src={"/assets/" + piece +".svg"} id={String(index)} alt=""></img>);
    }

    // Change this to make the chessboard do stuff
    function handleClick(e: any, piece:string|null, index:number):void{
        console.log(piece)
        console.log(index)
    }

    // 64 divs with index, and potentially a piece
    const squares = board.map((piece, index) => 
        <div 
        key={index}
        onClick={(e) => handleClick(e, piece, index)}
        style={{
            backgroundColor: getColor(index),
            height: size,
            width: size,
        }}
        >
            {piece && getImage(piece, index)}       
        </div>
    )

    return (
        <div className='grid grid-cols-8'>
            {squares}
        </div> 
    )
}
