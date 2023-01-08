import React, { useState } from 'react'
import { ChessBoard } from '../components/ChessBoard';
import { Evalbar } from '../components/Evalbar';

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
      <div className='flex justify-center mt-20 gap-3'>
        <Evalbar evaluation={0.2}/>
        
      </div>
      

    </div>
  )
}

export default noengine; 
