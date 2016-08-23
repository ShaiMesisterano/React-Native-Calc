import { combineReducers } from 'redux'
import { SET_NUM, SET_COMMAND, EXEC, RESET, Commands } from './actions.js'

const INITIAL_STATE = {
    num1: "",
    num2: "",
    command: null,
    result: ""
}

const sum = (num1, num2) => {
    return [ num1, num2 ].reduce(function(x1, x2){ return Math.floor(x1) + Math.floor(x2) }, 0);
}

const sub = (num1, num2) => {
    return [ num1, num2 ].reduce(function(x1, x2){ return Math.floor(x1) - Math.floor(x2) }, 0);
}

const getResult = (num1, num2, command) => {
    if (num1){
        if (num2){
            if (command){
                return command === Commands.SUM ?
                    sum(num1, num2) :
                    sub(num1, num2)
                }
            return num2;
        }
        return num1;
    }
    return null;
}

function command(state = INITIAL_STATE, action){
    switch (action.type){
    case SET_NUM:
	if (!state.command){
            return {...state, num1: state.num1 + action.num };
        }
        return {...state, num2: state.num2 + action.num };
    case SET_COMMAND:
        return { ...state, command: action.command };       
    case EXEC:
	return { ...state, result: getResult(state.num1, state.num2, state.command) }
    case RESET:
	return { ...state, ...INITIAL_STATE }
    default:
	return state;
    }
}

const calcApp = combineReducers({
     command
});

export default calcApp
