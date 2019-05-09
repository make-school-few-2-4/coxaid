import { createStackNavigator, createAppContainer } from 'react-navigation';

import WorkoutList from 'WorkoutList';
import WorkoutForm from 'WorkoutForm';


const MainNavigator = createStackNavigator({
  WorkoutList: { screen: WorkoutList },
  WorkoutForm: { screen: WorkoutForm },
})

 export default createAppContainer(MainNavigator);
