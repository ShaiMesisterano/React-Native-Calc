import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Navigator,
    AlertIOS,
    TouchableHighlight} from 'react-native';
import About from './About';
import Calc from './Calc';

class HelloWorld extends Component {
    render() {
o	return (
		<Navigator
	    initialRoute={{ title: 'My Initial Scene', index: 0 }}
	    renderScene={(route, navigator) =>
			 <Calc
			 title={route.title}
			 onForward={ () => {
			     const nextIndex = route.index + 1;
			     navigator.push({
				 title: 'Scene ' + nextIndex,
				 index: nextIndex,
			     });
			 }}
			 onBack={() => {
			     if (route.index > 0) {
				 navigator.pop();
			     }
			 }}
			 />
			}
		/>
	)
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
