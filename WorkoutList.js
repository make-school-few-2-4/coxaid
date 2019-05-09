import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

export default class WorkoutList extends Component {
  static navigationOptions = {
    title: 'Workouts',
  }

  constructor(props) {
    super(props)
    await AsyncStorage.setItem('workouts', JSON.stringify(['test', 'one', 'two', 'three']));
    data = await AsyncStorage.getItem('workouts');
    data = JSON.parse(data)
    this.state = {
       selectedIndex: 0,
       data: data,
    }
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={(item) => <Text>{item}</Text>}
        />
      </View>
    )
  }
}
