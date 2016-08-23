import React, { PropTypes } from 'react';
import { AppRegistry, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const Pad = ( { onNumClick, onCommandClick, onExecute, onReset, num1, num2, command } ) => {
    return (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={ () => onNumClick('1') }>
                    <Text style={styles.Button}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => onNumClick('2') }>
                    <Text style={styles.Button}>2</Text>
                </TouchableOpacity>                                              
                <TouchableOpacity onPress={ () => onNumClick('3') }>
                    <Text style={styles.Button}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => onReset() }>
                    <Text style={styles.Button}>AC</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity onPress={ () => onNumClick('4') }>
                    <Text style={styles.Button}>4</Text>
                </TouchableOpacity>                       
                <TouchableOpacity onPress={ () => onNumClick('5') }>
                    <Text style={styles.Button}>5</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={ () => onNumClick('6') }>
                    <Text style={styles.Button}>6</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={ () => onCommandClick('SUM') }>
                    <Text style={styles.Button}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity onPress={ () => onNumClick('7') }>
                    <Text style={styles.Button}>7</Text>
                </TouchableOpacity>                       
                <TouchableOpacity onPress={ () => onNumClick('8') }>
                    <Text style={styles.Button}>8</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={ () => onNumClick('9') }>
                    <Text style={styles.Button}>9</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={ () => onCommandClick('SUB') }>
                    <Text style={styles.Button}>-</Text>
                </TouchableOpacity>                       
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <TouchableOpacity onPress={ () => onExecute() }>
                    <Text style={styles.Button}>=</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: 70,
        fontSize: 26
    }
});

Pad.propTypes = {
    onNumClick: PropTypes.func.isRequired,
    onCommandClick: PropTypes.func.isRequired,
    onExecute: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Pad
