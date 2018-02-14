import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class DashScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      }
      
    static navigationOptions = { 
        title: 'Поиск', 
        header: null 
      };

    GetItem(item, name) {
      this.props.navigation.navigate('Wizard', {
        id: item,
        name: name
      });
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.pageheader}>
                <Text style={styles.title}>Care Coordinator</Text>
            </View>
            <View style={styles.pagecontent}>
              <View style={styles.dash_question}>
                <Text></Text>
              </View>
              <View style={styles.dash_question}>
                <View>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} style={styles.dashico} />
                </View>
                <View >
                  <Text style={styles.question_text} onPress={this.GetItem.bind(this, 'wiz1', 'Онкология')}>Онкология</Text>
                </View>
              </View>
              <View style={styles.dash_question}>
                <View>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} style={styles.dashico} />
                </View>
                <View>
                  <Text style={styles.question_text} onPress={this.GetItem.bind(this, 'wiz2', 'Рассеяный склероз')}>Рассеяный склероз</Text>
                </View>
              </View>
              <View style={styles.dash_question}>
                <View>
                  <Ionicons name="ios-arrow-dropright-outline" size={32} style={styles.dashico} />
                </View>
                <View>
                  <Text style={styles.question_text} onPress={this.GetItem.bind(this, 'wiz3', 'ДЦП')}>ДЦП</Text>
                </View>
              </View>
              <View style={styles.dash_question}>
                <Text></Text>
              </View>
            </View>
        </View>
      );
    }
  }

  export default DashScreen;

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
      },
      dash_question: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 20,
      },
      dashico: {
        color: 'rgba(120,145,172,1)',
        paddingTop: 8,
      },
      question_text: {
        paddingLeft: 20,
        paddingTop: 4,
        fontSize: 26,
        fontWeight: '500',
        color: 'rgba(120,145,172,1)',
      }
})