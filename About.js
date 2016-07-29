import React, { Component, PropTypes } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class About extends Component {
    static propTypes = {
	title: PropTypes.string.isRequired,
	onForward: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired
    }

    render() {
	return (
		<View>
		<Text style={{fontSize: 96}}>Hi</Text>
		<TouchableHighlight onPress={this.props.onForward}>
		<Text>Next</Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={this.props.onBack}>
		<Text>Back</Text>
		</TouchableHighlight>
		</View>
	);
    }
}
