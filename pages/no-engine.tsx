import React from 'react'
import { ChessBoard } from '../components/ChessBoard';

const noengine = () => {
    let list = [" "]


  return (
    <div>

        <ChessBoard size={60} type="default" />
    </div>
  )
}

export default noengine; 
