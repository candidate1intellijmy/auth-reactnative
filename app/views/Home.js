import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textHome}> HOME PAGE </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textHome: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300,
  },
});
export default Home;