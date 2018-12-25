import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { createRootNavigator } from "./router";

import { isSignedIn } from "./auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      username: "", 
      password: ""
    };

    this._handlePress = this._handlePress.bind(this)
  }

  onRegionChange = (region) => {
     alert(region);
     this.setState({ region });
  }

  _handlePress = () => {
     const { username } = this.state;
     const { password } = this.state;

     Alert.alert(username);
     Alert.alert(password);
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout/>;
  }
}