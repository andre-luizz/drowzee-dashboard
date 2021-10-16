import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Router: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={SignUp} />
			<Route path="/sign-in" component={SignIn} />

			<Route path="/dashboard" component={Dashboard} isPrivate />
		</Switch>
	);
};

export default Router;
