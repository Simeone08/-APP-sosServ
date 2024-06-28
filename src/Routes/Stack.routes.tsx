import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { FormSolicit } from '../screens/FormSolicit';
import { MyTabs } from './TabBottom.routes';

const Stack = createStackNavigator();

export function Navigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='root' component={MyTabs} />
        </Stack.Navigator>
    )
}

export function DashNavigation(){
    return(
    <Stack.Navigator
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name='Dashboard'
            component={Dashboard}
        />
    </Stack.Navigator>
    )
}

export function FormNavigation(){
    return(
    <Stack.Navigator
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name='FormNavigation'
            component={FormSolicit}
        />
    </Stack.Navigator>
    )
}