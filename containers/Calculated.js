import { connect } from 'react-redux'
import { setCommand, setNum1, setNum2 } from '../actions'
import Pad from '../components/Pad'

const mapStateToProps = (state) => {
    return {
	result: state.num1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	onNumPress: (num) => {
	    dispatch(setNum1(num))
	}
    }
}

const Calculated = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pad)
