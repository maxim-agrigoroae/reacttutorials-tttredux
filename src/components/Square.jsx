import React from 'react';

export default function Square(props) {
  const className = props.applyWinner ? 'square winline' : 'square';

  return (
    <button 
      className={className} 
      required={false}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
