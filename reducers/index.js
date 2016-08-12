import { combineReducers } from 'redux'

function execute(state, action) {
    if (action.type === 'SET_COMMAND') {
	if (action.command === 'SUM') {
	    return Object.assign( {}, state, { result: num1 + num2 } )
	}
	else if (action.command === 'SUB'){
	    return Object.assign( {}, state, { result: num1 - num2 } )
	}
    }
    return state;
}

function setNum1(){
    return Object.assign( {}, state, { num1: num1 } )
}

function setNum2(){
    return Object.assign( {}, state, { num2: num2 } )
}

const calcApp = combineReducers({
    execute,
    setNum1,
    setNum2
});

export default calcApp
