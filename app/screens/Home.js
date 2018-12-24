import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";

export default () => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Welcome">
        <Text style={{ fontSize: 28 }}>Hell-O!!!</Text>
    </Card>
  </View>
);