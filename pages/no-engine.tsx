import React, { useState } from 'react'
import { ChessBoard } from '../components/ChessBoard';
import { Evalbar } from '../components/Evalbar';

const noengine = () => {

  let [board, setBoard] = useState([
    "br", "bh", "bb", "bq", "bk", "bb", "bh", "br",
    "bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
    "wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp",
    "wr", "wh", "wb", "wq", "wk", "wb", "wh", "wr"])

  const DARK_COLOR = "#769656";
  const LIGHT_COLOR = "#eeeed2";


  return (
    <div>
      <div className='flex justify-center mt-20 gap-3'>
        <Evalbar evaluation={0.2}/>
        
      </div>
      

    </div>
  )
}

export default noengine; 
