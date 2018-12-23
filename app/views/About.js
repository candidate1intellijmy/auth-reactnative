import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
class About extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textAbout}> ABOUT PAGE </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textAbout: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300,
  },
});
export default About;