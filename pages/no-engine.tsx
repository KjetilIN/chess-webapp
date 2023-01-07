import React, { useState } from 'react'
import { ChessBoard } from '../components/ChessBoard';

const noengine = () => {

  let [board, setBoard] = useState([
    "r", "k", "b", "q", "k", "b", "k", "r",
    "p", "p", "p", "p", "p", "p", "p", "p",
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null,
    "P", "P", "P", "P", "P", "P", "P", "P",
    "R", "K", "B", "Q", "K", "B", "K", "R"])

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
