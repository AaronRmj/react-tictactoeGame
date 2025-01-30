import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  //alternance
  const [XisNext, setXisNext] = useState(true);

  //board gère memoire interne anle app
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice(); //creation nouveau tab
    if (XisNext) {
      nextSquares[i] = "X";
    } else nextSquares[i] = "O";

    setSquares(nextSquares); // MAJ du valeur de squares
    setXisNext(!XisNext); // O is next
  }

  function calculateWinner(square) {
    //square ilay analyzena eto
    const lines = [
      //combinaisons possible
      [0, 1, 2],
      [3, 4, 5], // horizontale
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7], //verticale
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6], //oblique
    ];

    for (i = 0; i < lines.length; i++) {
      //destructuring
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return square[a];
      }

      return null;
    }
  }

  const winner = calculateWinner(squares);
  if (winner) {
    let status;
    status = winner + "a gagné";
  } else status = "prochain tour: " + (XisNext ? "X" : "O");

  return (
    //tableaux de 9 elements valeurs null
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
