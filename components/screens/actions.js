import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class ActionsScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      }
      
    static navigationOptions = { 
        title: 'История', 
        header: null 
      };

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.pageheader}>
                <Text style={styles.title}>История</Text>
            </View>
            <View style={styles.pagecontent}>

            </View>
        </View>
      );
    }
  }

  export default ActionsScreen;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
          ios: {
            backgroundColor: 'rgba(234,235,235,1)',
          },
          android: {
            backgroundColor: 'rgba(234,235,235,1)',
          },
        }),
      },
      title: {
        color: 'rgba(104,105,105,1)',
        fontSize: 34,
        marginLeft: 20,
        marginTop: 40,
        fontWeight: '800',
      },
      subtitle: {
        color: 'rgba(104,105,105,1)',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 40,
        fontWeight: '600',
      },
      text: {
        color: 'rgba(104,105,105,1)',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 50,
        fontWeight: '300',
      },
      pageheader: {
          flex: 1,
      },
      pagecontent: {
          flex: 6,
      }
})