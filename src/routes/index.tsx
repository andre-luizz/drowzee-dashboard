import React from 'react';

import { Route, Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';

const Router: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={SignUp} />
		</Switch>
	);
};

export default Router;
