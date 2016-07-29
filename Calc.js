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
	      <View style={{flex: 3}}>
	      <TermsOfUse />
	      <Movies />
	      </View>
	      </View>
	  </View>
    );
  }
}

class Display extends Component {
    constructor (props) {
	super(props);
	this.state = { result: 0 };
    }
    render () {
	return (
		<View>
		<Pad print={this._print.bind(this)} />
		<Text style={{fontSize: 72}}>
		{this.state.result}
	    </Text>
		</View>
	);
    }
    _print (output) {
	output = "" + output;
	let previousResult = this.state.result === 0 ? '' : '' + this.state.result;
	this.setState({ result: previousResult + output });
    }
}

class Pad extends Component {
    render () {
	return (
		<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
		<TouchableOpacity onPress={ () => this._print('1')}><Text>1</Text></TouchableOpacity>
		<TouchableOpacity><Text>2</Text></TouchableOpacity>
		<TouchableOpacity><Text>3</Text></TouchableOpacity>
		</View>
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
		<TouchableOpacity><Text>4</Text></TouchableOpacity>
		<TouchableOpacity><Text>5</Text></TouchableOpacity>
		<TouchableOpacity><Text>6</Text></TouchableOpacity>
		</View>
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
		<TouchableOpacity><Text>7</Text></TouchableOpacity>
		<TouchableOpacity><Text>8</Text></TouchableOpacity>
		<TouchableOpacity><Text>9</Text></TouchableOpacity>
		</View>
		<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
		<TouchableOpacity><Text>-</Text></TouchableOpacity>
		<TouchableOpacity><Text>0</Text></TouchableOpacity>
		<TouchableOpacity><Text>+</Text></TouchableOpacity>
		</View>
		</View>
	);
    }

    _print (output){
	if (this.props.print) {
	    this.props.print(output);
	}
    }
}

class TermsOfUse extends Component {
    render () {
	return (
	    <ScrollView>
		<Text>
		Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. Lorem ipsum sapientem ne neque dolor erat,eros solet invidunt duo Quisque aliquid leo. Pretium patrioque sociis eu nihil Cum enim ad, ipsum alii vidisse justo id. Option porttitor diam voluptua. Cu Eam augue dolor dolores quis, Nam aliquando elitr Etiam consetetur. Fringilla lucilius mel adipiscing rebum. Sit nulla Integer ad volumus, dicta scriptorem viderer lobortis est Utinam, enim commune corrumpit Aenean erat tellus. Metus sed amet dolore justo, gubergren sed. 
		</Text>
		</ScrollView>
	);
    }
}

class Movies extends Component {
    constructor(props){
	super(props);
	this.state= {
	    caption: "Click me"
	};
    }
    
    render () {
	return (
		<TouchableOpacity onPress={this.setMovies}>
		<Text>
		{this.state.caption}
	    </Text>
		</TouchableOpacity>
	);
    }

    setMovies() {
	return fetch('http://facebook.github.io/react-native/movies.json')
	    .then((response) => response.json())
	    .then((responseJson) => {
		AlertIOS.alert("RESPONSE", JSON.stringify(responseJson.movies));
	    })
	    .catch((error) => {
		console.error(error);
	    });
    }
}
