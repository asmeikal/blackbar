import React from 'react';
import { Font, Constants } from 'expo';
import FirstPage from './src/components/views/FirstPage';
import { Loading } from './src/components/views/Loading';
import { StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  state ={
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'cutive-mono-regular': require('./src/assets/fonts/CutiveMono-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const Component = this.state.fontLoaded ? FirstPage : Loading;
    return (
      <>
      <View style={styles.statusBar}/>
      <Component />
      </>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "black",
    height: Constants.statusBarHeight,
  },
});
