import React from 'react';
import { connect } from 'react-redux'
import * as R from 'ramda'
import Display from '../components/Display'
    
const mapStateToProps = (state) => {
    return {
        num1: state.command.num1,
        num2: state.command.num2,
        result: state.command.result
    }
}

export default connect(mapStateToProps)(Display)
