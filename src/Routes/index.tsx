import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './TabBottom.routes';
import { Navigation } from './Stack.routes';


export function Routes() {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}