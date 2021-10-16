import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/auth';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
