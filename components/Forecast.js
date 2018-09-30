import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
    return (
        <View>                
        <Text style={styles.main}>{this.props.main}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
        <View style = {styles.temps}>
            <Text style={styles.temp}>{this.props.temp}</Text>
            <Text style={styles.cel}>°C</Text>
        </View>   
        
    </View>
    );
    }
}

const styles = StyleSheet.create({
    main : { textAlign:'center',
             color:'white',
             opacity:0.7,
             fontSize:40,
             paddingTop: 20
    },
    description : { textAlign:'center',
                    color:'white',
                    opacity:0.7,
                    fontSize:20,
                    paddingTop: 20
    },
    temps : { flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              
    },
    temp : { textAlign:'center',
             color:'white',
             fontSize:60
    },
    cel : { fontSize: 25,
            color:'white',
    },
    text :  { textAlign:'center',
              color: 'white',
              fontSize:30
    },          
 }); 