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
    board: string[]; // state as a list of peices 
    chessEngine?: chessEngine;
}








export const ChessBoard: React.FC<Props> = ({ size , light, dark, board}) => {
    let index = 0; //index of the square
    let isSelected = false; // is selected 
    let avalibleMoves = []; // list of moves to pick from

    function getColor(r:number, c:number) {
        if (r % 2 !== 0) {
            if (c % 2 !== 0) {
                return light !== undefined ? light : "white";
            }
            return dark !== undefined ? dark : "gray";
        } else {
            if (c % 2 !== 0) {
                return dark !== undefined ? dark : "gray";
            }
            return light !== undefined ? light : "white";
        }
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
