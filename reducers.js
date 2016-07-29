import { combineReducers } from 'redux'
import { PRINT, EXEC, Commands } from './actions.js'

function printOutput(state = [], action) {
    return [
	...state,
	{
	    output: action.output
	}
    ];
}

function execCommand(state = {num1: 0 ,num2: 0, command: Commands.SUM, result: 0}, action) {
    if (action.type === EXEC) {
	if (action.command === Commands.SUM) {
	    return Object.assign( {}, state, { result: num1 + num2 } )
	}
	else if (action.command === Commands.SUB){
	    return Object.assign( {}, state, { result: num1 - num2 } )
	}
    }
    return state;
}

const calcApp = combineReducers({
    printOutput,
    execCommand
});

export default calcApp
