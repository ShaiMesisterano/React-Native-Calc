import React, { Component, PropTypes } from 'react';
import Num from './Num'

const Pad = ({onNumPress}) => (
	<Num
    text='1'
    onPress={ () => onNumPress(text) }
	/>
)

export default Pad
