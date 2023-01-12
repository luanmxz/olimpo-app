import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';

import dark from './src/theme/dark';
import light from './src/theme/light';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ThemeProvider theme={dark}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
