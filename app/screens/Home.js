import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import MapView from 'react-native-maps';

export default ({region, onRegionChange}) => (
    <MapView 
    style={{
    	position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
    }} 
    region={region} 
    onRegionChange={onRegionChange}
  />
);