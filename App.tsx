import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home/Home';

import dark from './src/theme/dark';
import light from './src/theme/light';

export default function App() {
	return (
		<ThemeProvider theme={dark}>
			<Home />
		</ThemeProvider>
	);
}
