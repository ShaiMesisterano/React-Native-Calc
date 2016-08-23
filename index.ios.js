import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()

class HelloWorld extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
