import React, { useState } from 'react'
import { ChessBoard } from '../components/ChessBoard';

const noengine = () => {

  let [board, setBoard] = useState([
    "r", "n", "b", "q", "k", "b", "n", "r",
    "p", "p", "p", "p", "p", "p", "p", "p",
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    "P", "P", "P", "P", "P", "P", "P", "P",
    "R", "N", "B", "Q", "K", "B", "N", "R"])

  const DARK_COLOR = "#769656";
  const LIGHT_COLOR = "#eeeed2";


  return (
    <div>
      <div className='flex justify-center mt-20'>
        <ChessBoard size={70} type="default" dark={DARK_COLOR} light={LIGHT_COLOR} board={board} />
      </div>

    </div>
  )
}

export default noengine; 
