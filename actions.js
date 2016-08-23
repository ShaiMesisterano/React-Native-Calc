// action types
export const PRINT = 'PRINT';
export const EXEC = 'EXEC';

// other constants
export const Commands = {
    SUM: 'SUM',
    SUB: 'SUB'
}

// action creators
export function print(output){
    return { type: PRINT, output};
}

export function exec(num1, num2, command, result){
    return { type: EXEC, num1, num2, command, result };
}
