import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomePage } from './components/Home/WelcomePage'; 
import { Home } from './components/Home';
import { Login } from './components/Login/Login';
import { DetailsPage } from './components/Villas/DetailsPage';
import { Location } from './components/Pages/Location';
import { Profile } from './components/Pages/Profile';
import { More } from './components/Pages/More';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}