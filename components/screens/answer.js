import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image, TextInput, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class AnswerScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {text: '', ages: '', name: '', id: ''};
      }

      render() {

        const { params } = this.props.navigation.state;

          return (
                    <Text style={styles.subtitle}>answer</Text>
        
          );
        }
      }

      export default AnswerScreen;

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
            fontSize:34,
            marginLeft: 20,
            marginTop: 40,
            fontWeight: '800',
          },
          subtitle: {
            color: 'rgba(104,105,105,1)',
            fontSize: 24,
            marginLeft: 20,
            marginTop: 40,
            fontWeight: '600',
          },
          subtitle1: {
            color: 'rgba(104,105,105,1)',
            fontSize: 20,
            marginLeft: 10,
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
              paddingLeft: 20,
              paddingTop: 40,
          },
          dash_question1: {
            flex: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: 20,
          },
          dashico: {
            color: 'rgba(120,145,172,1)',
            paddingTop: 8,
          },
          question_text1: {
            fontSize: 26,
            fontWeight: '500',
            color: 'rgba(120,145,172,1)',
          },
          gridView: {
            paddingTop: 25,
            flex: 1,
          },
          itemContainer: {
            justifyContent: 'center',
            borderRadius: 5,
            padding: 10,
            height: 150,
          },
          itemName: {
            fontSize: 28,
            color: 'rgba(104,105,105,1)',
            fontWeight: '600',
          },
          btn: {
              width: 200,
              backgroundColor: 'rgba(120,145,172,1)',
          }
    })