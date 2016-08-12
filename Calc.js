import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    View,
    ScrollView,
    ListView,
    Text,
    TouchableOpacity,
    AlertIOS,
    Navigator} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calcApp from './reducers';
import { print, exec, Commands } from './actions' // TODO: remove

let store = createStore(calcApp);

//AlertIOS.alert("1", JSON.stringify(store.getState()));

let unsubscribe = store.subscribe( () => AlertIOS.alert(JSON.stringify(store.getState())) );

//store.dispatch(print('1'));
//store.dispatch(print('2'));
//store.dispatch(print('123'));
//store.dispatch(exec(1,1, Commands.SUM, 2));
//store.dispatch(exec(1,1, Commands.SUB, 0));

unsubscribe();

export default class Calc extends Component {
  render() {
      return (
	      <View style={{flex: 1, flexDirection: 'column'}}>
	      <View style={{flex: 1, flexDirection: 'row'}}>
	      <View style={{flex: 3, justifyContent: 'center', backgroundColor: 'powderblue'}}>
              <Text>
              Calc
          </Text>
	      </View>
	      <View style={{flex: 3, justifyContent: 'flex-end',  backgroundColor: 'skyblue'}}>
              <Text>
              By
          </Text>
	      <Text>Shai Mesisterano</Text>
	      </View>
	      </View>
	      <View style={{flex: 1, backgroundColor: 'steelblue'}}>
              <Display />
	      </View>
	  </View>
    );
  }
}
