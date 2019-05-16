import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Divider } from 'react-native-material-ui';

export default class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutName: 'Workout Name',
    };
  }

  render() {
    const { workoutName } = this.state;
    return (
      <View>
        <Text>Workout Name</Text>
        <TextInput
          onChangeText={workoutName => this.setState({ workoutName, ...this.state })}
          value={workoutName}
        />
        <Divider />
      </View>
    );
  }
}
