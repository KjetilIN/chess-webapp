import React from 'react'

interface Props {
    type: string; // type of board 
    size: number; // size of the square
    light: string;
    dark: string;
    board: string[]; // state as a list of peices 
}








export const ChessBoard: React.FC<Props> = ({ size , light, dark, board}) => {

    let row = 8;
    let col = 8;

    function getColor(r:number, c:number) {
        if (r % 2 !== 0) {
            if (c % 2 !== 0) {
                return light;
            }
            return dark;
        } else {
            if (c % 2 !== 0) {
                return dark;
            }
            return light;
        }
    }


    function getImage():string{
        if(board[index] !== " "){
            index++; 
            return "/assets/" + board[index - 1] + ".svg";
        }
        index++
        return " ";
    }


    let index = 0; 

    


    return (
        <table className="border-collapse ">
            <tbody>
                {[...Array(row)].map((_, r) => (
                    <tr key={r}>
                        {[...Array(col)].map((_, c) => (
                            <td
                                style={{
                                    backgroundColor: getColor(r,c),
                                    height: size,
                                    width: size,
                                }}
                                key={c}
                            >
                                {<img src={getImage()} alt=""></img>}
                                
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
