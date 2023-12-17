import React, { useState } from 'react';

const rowStyle = {
    display: 'flex',
};

const squareStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    border: '1px black solid',
};

const instructionsStyle = {
    marginTop: '5px',
    marginBottom: '5px',
};

const buttonStyle = {
    marginTop: '15px',
    marginBottom: '15px',
};

const Square = ({ value, onClick }) => {
    return (
        <div style={squareStyle} onClick={onClick}>
            {value}
        </div>
    );
};

const TicTacToe = () => {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);

    const calculateWinner = (squares) => {
        const line = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < line.length; i++) {
            const [a, b, c] = line[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[b] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        const squaresCopy = [...squares];
        if (winner || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = isNext ? 'X' : 'O';
        setSquare(squaresCopy);
        setIsNext(!isNext);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next Player: ${isNext ? 'X' : 'O'}`;
    }

    const reset = () => {
        setSquare(Array(9).fill(null));
        setIsNext(true);
    };

    return (
        <div className="solution">
            <h1>Tic Tac Toe</h1>
            <div style={instructionsStyle}>{status}</div>
            <button style={buttonStyle} onClick={reset}>
                Reset
            </button>
            <div>
                <div style={rowStyle}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div style={rowStyle}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div style={rowStyle}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
