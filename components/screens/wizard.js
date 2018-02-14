import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image, TextInput, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import GridView from 'react-native-super-grid';

class WizardScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {text: '', ages: '', name: '', id: ''};
      }

    chooseAges() {

        const items = [
            {age: '0 - 12'},
            {age: '12 - 21'},
            {age: '21 - 55'},
            {age: '55+'}
        ];
        return (

                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <View style={styles.itemContainer}>
                        <Ionicons name="ios-man-outline" size={42} style={styles.dashico}  onPress={this.GetAge.bind(this, 'wiz1', 'Онкология', item.age)} />
                        <Text style={styles.itemName} onPress={this.GetAge.bind(this, 'wiz1', 'Онкология', item.age)}>{item.age}</Text>
                    </View>
                    )}
                />

        )
    }

    showAges() {
        return(
            this.state.ages ? this.question() : this.chooseAges()
        )
        
    }

    question() {
        return (
            <View>
                
                <TextInput
                style={{height: 60, fontSize: 24}}
                placeholder="Введите Ваш запрос"
                onChangeText={(text) => this.setState({text})}
                />
                <Button
                    title="Найти"
                    color="rgba(120,145,172,1)"
                    onPress={() =>
                        this.props.navigation.navigate('Answer', { ages: this.state.ages, text: this.state.text, name: this.state.name, id: this.state.id })
                    }
                />
            </View>
        )
    }

    GetAge(item, name, ages) {
        this.setState({ages: ages})
      }

    render() {

    const { params } = this.props.navigation.state;
    const itemId = params ? params.id : null;
    const name = params ? params.name : null;


      return (
        <View style={styles.container}>
            <View style={styles.pageheader}>
                <Text style={styles.subtitle}>{name} {this.state.ages ? '('+this.state.ages +')': null}</Text>
            </View>
            <View style={styles.pagecontent}>
                {itemId == 'wiz1' ? this.showAges() : this.question()}
            </View>
        </View>        
      );
    }
  }

  export default WizardScreen;

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