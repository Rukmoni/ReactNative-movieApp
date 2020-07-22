import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { func } from './src/constants';
import RootNavigator from './src/navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <AppLoading
        startAsync={func.loadAssetsAsync}
          onFinish={() => this.setState({ isLoading: false })}
          
         
        />
      );
    } 
  
    return (
      <React.Fragment>
     
        <RootNavigator />
      </React.Fragment>
    );
  }
}
