import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
    return (
    <View >
        <Text style={styles.main}>{this.props.main}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
        <Text style={styles.temp}>{this.props.temp}°C</Text>
    </View>
    );
    }
}

const styles = StyleSheet.create({
    main: {textAlign:'center', color:'#E44179', fontSize:50},
    description: {textAlign:'center', color:'#C32121', fontSize:50},
    temp: {textAlign:'center', color:'#59B5F0', fontSize:50},
});  