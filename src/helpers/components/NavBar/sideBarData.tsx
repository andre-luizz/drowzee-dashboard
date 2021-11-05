import React from 'react';

import { FiHome, FiFolder } from 'react-icons/fi';

export const sideBarData = [
	{
		title: 'Home',
		path: '/',
		icon: <FiHome color="#fff" size={25} />,
	},
	{
		title: 'Projects',
		path: '/projects',
		icon: <FiFolder color="#fff" size={25} />,
	},
];
