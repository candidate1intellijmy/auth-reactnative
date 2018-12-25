import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({navigation, _handlePress}) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN IN">
      <FormLabel>Email</FormLabel>
      <FormInput 
        placeholder="Email address..." 
        onChangeText={username => this.setState({username})}
      />
      <FormLabel>Password</FormLabel>
      <FormInput 
        secureTextEntry 
        placeholder="Password..." 
        onChangeText={password => this.setState({password})}
      />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={this._handlePress}
      />
    </Card>
  </View>
);