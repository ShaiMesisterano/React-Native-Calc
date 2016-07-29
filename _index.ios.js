/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
    constructor(props: any) {
	super(props);
	this.state = {
	    bounceValue: new Animated.Value(0),
	};
    }
    render(): ReactElement {
	return (
/*	        <Animated.Image                         // Base: Image, Text, View
	    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
	    style={{
		flex: 1,
		transform: [                        // `transform` is an ordered array
		    { scale: this.state.bounceValue},
		]
	    }}
	    />
		*/
		<Animated.View
		style={{
		flex: 1,
		transform: [                        // `transform` is an ordered array
		    { scale: this.state.bounceValue},
		]
		}}>
		<Text style={styles.welcome}>Hello World!</Text>
		</Animated.View>
	);
    }
    componentDidMount() {
	position = 0;
	gestureState = {
	    vx: 10,
	    vy: 20
	};
	twirl = 10;
	Animated.sequence([            // spring to start and twirl after decay finishes
	    Animated.decay(position, {   // coast to a stop
		velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
		deceleration: 0.997,
	    }),
	    Animated.parallel([          // after decay, in parallel:
		Animated.spring(position, {
		    toValue: {x: 0, y: 0}    // return to start
		}),
		Animated.timing(twirl, {   // and twirl
		    toValue: 360,
		}),
	    ]),
	]).start(); 
    }
}

				    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
