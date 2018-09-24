import React from 'react';
import Weather from './components/Weather'
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
 doIt = () => {
 console.log("Hello from console")
 }
 render() {
 return (
  <Weather zipCode="90110"/>
 );
 }
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
});
