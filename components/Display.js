import React, { PropTypes } from 'react';
import { AppRegistry, View, TouchableOpacity, Text, AlertIOS } from 'react-native'

const Display = ( { num1, num2, command, result } ) => {
    return (
            <View style={ num1 ? style.show : styles.hide }>
            <Text>
            {num1}
	</Text>
	    <Text>
	    {num2}
	</Text>
	    <Text>
	    {result}
        </Text>   
            </View>
    )
}

const styles = StyleSheet.create({
    hide: { display: none  },
    show: { display: block }
});

export default Display
