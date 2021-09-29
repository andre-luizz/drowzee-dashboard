import React from 'react';
import Heading from './components/Heading';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyles />
			<Heading>Create your account</Heading>
		</>
	);
};

export default App;
