import React, { Component } from 'react';
import { Text, View, FlatList, AsyncStorage } from 'react-native';
import { ActionButton, ListItem, Divider } from 'react-native-material-ui';

class WorkoutList extends Component {
  static navigationOptions = {
    title: 'Workouts',
  }

  constructor(props) {
    super(props)
    this.state = {
       selectedIndex: 0,
       data: ['hello'],
    }
  }

  loadData = async () => {
    const data = await AsyncStorage.getItem('workouts');
    return JSON.parse(data)
  }

  inputTestData = async () => {
    await AsyncStorage.setItem('workouts', JSON.stringify(['test', 'one', 'two', 'three']));
  }

  componentDidMount = async () => {
    await this.inputTestData();
    const data = await this.loadData();
    this.setState({data: data})
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (<><ListItem centerElement={item}/><Divider/></>)}
          keyExtractor={(item, index) => `${index}`}
        />
        <ActionButton onPress= {() => navigate('WorkoutForm') } />
      </View>
    )
  }
}

export default WorkoutList;