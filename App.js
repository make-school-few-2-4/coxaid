/* eslint-disable react/jsx-filename-extension */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { ThemeContext } from 'react-native-material-ui';


import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';


const MainNavigator = createStackNavigator({
  WorkoutList: { screen: WorkoutList },
  WorkoutForm: { screen: WorkoutForm },
});

const AppContainer = createAppContainer(MainNavigator);

export default () => {
  return (
    <ThemeContext.Provider>
      <AppContainer />
    </ThemeContext.Provider>
  )
}
