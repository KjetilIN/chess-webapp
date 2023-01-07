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
    let index = 0; //index of the square
    let isSelected = false; // is selected 
    let avalibleMoves = []; // list of moves to pick from

    // Given an index of the sqaure (0 -> 63) calculate x and y coordinate
    // For white squares, the x and y coordinate are either both odd or both even
    // For black squares, one coordinate is odd, while the other is even
    function getColor(index: number) : string {
        const x = index % 8
        const y = Math.floor(index / 8)
        return (x % 2 === y % 2) ? light : dark
    }


    function getImage(): JSX.Element | null{
        if(board[index] !== " "){ 
            return (<img src={"/assets/" + board[index++] +".svg"} id={String(index)} alt=""></img>);
        }
        index++
        return <img src={"/assets/" + board[index] +".svg"} id={String(index)} alt="" style={{opacity: 0}}></img>;
    }

    function handleClick(e: any):void{
        let {id, value} = e.target;
        console.log(id);
        console.log(value);

    }

    

    


    return (
        <table className="border-collapse ">
            <tbody>
                {[...Array(8)].map((_, r) => (
                    <tr key={r}>
                        {[...Array(8)].map((_, c) => (
                            <td
                                style={{
                                    backgroundColor: getColor(r,c),
                                    height: size,
                                    width: size,
                                }}
                                key={c}
                                onClick={e => handleClick(e)}
                            >
                                {getImage()}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
