import { combineReducers } from 'redux'
import { SET_NUM, SET_COMMAND, EXEC, RESET, Commands } from './actions.js'

function num(state = {}, action){
    console.warn(JSON.stringify(state));
    if (action.type === SET_NUM){
        if (!state.command){
            return {...state, num1: "" +
            typeof state.num1 !== "undefined" && state.num1 + action.num ||
            action.num }
        }
        else {
            return {...state, num2: "" + state.num2 + action.num }
        }
    }
    
    return state;
}

function command(state = {}, action){
    if (action.type === SET_COMMAND){
        return { ...state, command: action.command } ;   
    }
    return state;
}

function exec(state = {}, action) {
    if (action.type === EXEC) {
	   if (state === Commands.SUM) {
           return {...state, result: state.num1 + state.num2 };
	   }
	   else if (state.command === Commands.SUB){
	       return {...state, result: state.num1 - state.num2 };
	   }
    }
    return state;
}

function reset(state = {}, action) {
    if (action.type === RESET){
        // return { ...state, num1: null, num2: null, command: null, result: null}
    }
    return state;
}

const calcApp = combineReducers({
    num,
    command,
    exec,
    reset
});

export default calcApp
