import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import calcApp from './reducers'
import App from './components/App'

class HelloWorld extends Component {
    render() {
	    <Provider store={store}>
	    <App />
	    </Provider>
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
