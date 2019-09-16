import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {OwnProps} from "./GameContainer";
import BoardContainer from './Board/BoardContainer'
import SquareContaier from './Square/SquareContainer'


// class Game extends React.Component{
//     render(){
//         <Boad />
//     }
//
// }

export default function(props:OwnProps) {
    useEffect(() => {
        props.history;
    }, []);
    return (
        <>
            <BoardContainer />
            <SquareContaier />
        </>
    );
}
