// action types
export const SET_NUM = 'SET_NUM';
export const SET_COMMAND = 'SET_COMMAND';
export const EXEC = 'EXEC';
export const RESET = 'RESET';

// other constants
export const Commands = {
    NUM1: 'NUM1',
    NUM2: 'NUM2',
    SUM: 'SUM',
    SUB: 'SUB'
}

export function setNum(num){
    return {
        type: SET_NUM,
        num
    }
}

export function setCommand(command){
    return {
        type: SET_COMMAND,
        command
    }
}

export function execute(){
    return {
        type: EXEC
    };
}

export function reset(){
    return {
        type: RESET
    };
}
