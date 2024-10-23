    // import logo from './logo.svg';
    import { useState } from 'react';
    import './App.css';
    import { useNavigate } from 'react-router-dom';

    function Ttt(){
        return <Square val = "1"/>
    }
    var c = 1;
    var p = 0;
    function Square({val, onSquareClick})
    {
        // function handleClick(){
        //     console.log("clicked");
        //     setVal('X');
        // }
        //const [val, setVal] = useState(null);
        return <button className="square" onClick={onSquareClick}> {val}</button>
    }

    



    function Board(){
        const [squares, setSquares] = useState(Array(9).fill(""));

        const winner = calculateWinner(squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (c==1 ? "X" : "O");
        }
        

        function handleClick(x){
            if(squares[x] || calculateWinner(squares))
                return;
            const ns = squares.slice();
            if(c ==1) {ns[x] = "X"; }
            else {ns[x] = "O";}
            p++;
            c=1-c;
            setSquares(ns);
        }

        function calculateWinner(squares) {
            if(p == 9)
            {
                return "Draw";
            }
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
              const [a, b, c] = lines[i];
              if (squares[a] && squares[a] === squar80px80pxes[b] && squares[a] === squares[c]) {
                return squares[a];
              }
            }
            return null;
          }

        
        return (
        <>

        <p>{status}</p>

        <div className="board-row">
            <Square val={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square val={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square val={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square val={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square val={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square val={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square val={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square val={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square val={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </>
        );
    }

    export default Board;