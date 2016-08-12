import React, { Component, PropTypes } from 'react';

const Num = ({  onPress, text }) => (
	<View>
	<TouchableOpacity onPress={ onPress }>
	<Text>
	{text}
    </Text>
	</TouchableOpacity>
	</View>
)

Num.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Num
