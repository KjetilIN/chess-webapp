import React from 'react'

interface Props {
    type: string; // type of board 
    size: number; // size of the square
    //state: string[]; // state as a list of peices 
}








export const ChessBoard: React.FC<Props> = ({ size }) => {

    let isOdd = true; //variable used to see if the square is even or odd 
    let row = 8;
    let col = 8;

    function getColor():string {
        if(isOdd){
            isOdd = false;
            return "#eeeed2"
        }
        isOdd = true;
        return "#769656";
    }

    const DARK_COLOR = "#769656";
    const LIGHT_COLOR = "#eeeed2";


    return (
        <table className="border-collapse ">
            <tbody>
                {[...Array(row)].map((_, r) => (
                    <tr key={r}>
                        {[...Array(col)].map((_, c) => (
                            <td
                                style={{
                                    backgroundColor: getColor(),
                                    height: size,
                                    width: size,
                                }}
                                key={c}
                            >
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
