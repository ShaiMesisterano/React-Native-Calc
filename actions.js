// action types
export const EXEC = 'EXEC';

// other constants
export const Commands = {
    SUM: 'SUM',
    SUB: 'SUB'
}

export function execute(num1, num2, command){
    return { type: EXEC, num1, num2, command };
}
