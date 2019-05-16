import React, { Component } from 'react';
import { Text, View, FlatList, AsyncStorage } from 'react-native';

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
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    )
  }
}

export default WorkoutList;