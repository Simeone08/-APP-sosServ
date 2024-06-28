import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashNavigation, FormNavigation } from './Stack.routes';
// import { FormSolicit } from '../screens/FormSolicit';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="DashNav" component={DashNavigation} />
      <Tab.Screen name='FormNav' component={FormNavigation}/>
    </Tab.Navigator>
  );
}