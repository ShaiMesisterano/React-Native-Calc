import React from 'react';
import { View, Text } from 'react-native'
import DisplayContainer from '../containers/DisplayContainer'
import PadContainer from '../containers/PadContainer'

const App = () => {
    return (
        	<View style={{flex: 1}}>
	      		<View style={{flex: 1, flexDirection: 'row'}}>
	      			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'powderblue'}}>
              			<Text>Calc</Text>
	      			</View>
	      			<View style={{flex: 1, justifyContent: 'flex-end',  backgroundColor: 'skyblue'}}>
              			<Text>By</Text><Text>Shai Mesisterano</Text>
	      			</View>
	      		</View>
	      		<View style={{flex: 8, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'steelblue'}}>
            		<DisplayContainer />
            		<PadContainer />
        		</View>
        	</View>
    )
}

export default App