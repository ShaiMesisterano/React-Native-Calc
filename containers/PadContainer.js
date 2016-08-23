import { connect } from 'react-redux'
import { AlertIOS } from 'react-native'
import { setNum, setCommand, execute, reset } from '../actions'
import Pad from '../components/Pad'

const mapStateToProps = (state) => {
    return {
	command: state.command.command
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	   onNumClick: (num) => {
           dispatch(setNum(num))
	   },
        onCommandClick: (command) => {
           dispatch(setCommand(command))
	   },
        onExecute: () => {
           dispatch(execute())
	   },
     onReset: () => {
        dispatch(reset())
     }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pad)
