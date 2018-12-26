import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


export default class AuthApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWlsH8LxU0R1Gm_hcNlgZfa_sdbhOAf2o',
      authDomain: 'authapp-reactnative.firebaseapp.com',
      databaseURL: 'https://authapp-reactnative.firebaseio.com',
      projectId: 'authapp-reactnative',
      storageBucket: 'authapp-reactnative.appspot.com',
      messagingSenderId: '165318471355'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} buttonName={'Log out'} />
          </CardSection>
        );
      case false:
        return <LoginForm />;        
      default:
        return (
          <CardSection>
            <Spinner size={'large'} />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'AuthApp'} />
        {this.renderContent()}
      </View>
    );
  }
}
