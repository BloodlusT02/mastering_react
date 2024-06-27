import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick} className='square'>{value}</button>
    </>
  );
}

export default Square;