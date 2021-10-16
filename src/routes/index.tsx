import React from 'react';

import { Route, Switch } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Router: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={SignUp} />
			<Route path="/sign-in" component={SignIn} />
		</Switch>
	);
};

export default Router;
