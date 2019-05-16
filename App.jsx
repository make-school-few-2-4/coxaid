import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';


import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';


const MainNavigator = createStackNavigator({
  WorkoutList: { screen: WorkoutList },
  WorkoutForm: { screen: WorkoutForm },
});

const AppContainer = createAppContainer(MainNavigator);

export default () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  )
}
