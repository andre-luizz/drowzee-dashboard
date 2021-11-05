import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import NavBar from '../components/common/Navigation/NavBar';

const Router: React.FC = () => {
	return (
		<Switch>
			<NavBar />
			<Route exact path="/" component={SignUp} />
			<Route path="/sign-in" component={SignIn} />

			<Route path="/dashboard" component={Dashboard} isPrivate />
			<Route path="/projects" component={Projects} isPrivate />
		</Switch>
	);
};

export default Router;
