import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button
            className='square'
            onClick={props.onclick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.gameStatus[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameHistory: [{
                gameStatus: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        console.log('handleClick');
        const gameHistory = this.state.gameHistory.slice(0, this.state.stepNumber + 1);
        const currentGame = gameHistory[gameHistory.length - 1];
        const gameStatus = currentGame.gameStatus.slice();
        if (calculateWinner(gameStatus) || gameStatus[i]) {
            return;
        }

        gameStatus[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            gameHistory: gameHistory.concat([{
                gameStatus: gameStatus
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: gameHistory.length
        });
    }

    jumpTo(step) {
        this.setState(
            {
                stepNumber: step,
                xIsNext: (step % 2) === 0
            }
        )
    }

    render() {
        const gameHistory = this.state.gameHistory;
        const currentGame = gameHistory[this.state.stepNumber];
        const winner = calculateWinner(currentGame.gameStatus);
        const moves = gameHistory.map((step, move) => {
            console.log('my');
            console.log(step);
            console.log('step');
            console.log(move);
            console.log('move');
            const desc = move ?
                'Go to move #' + move :
                'go to game start';

            return (
                <li key={move}>
                    <button
                        onClick={() => this.jumpTo(move)}
                    >
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = winner + " is winner";
        } else {
            status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
        }

        console.log(status);

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        gameStatus={currentGame.gameStatus}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);


function calculateWinner(gameStatus) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            return gameStatus[a];
        }
    }
    return null;
}
