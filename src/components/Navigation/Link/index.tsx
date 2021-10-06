import React from 'react';
import { LinkProps } from 'react-router-dom';

import * as S from './styles';

type ILink = LinkProps;

const Link: React.FC<ILink> = ({ children, to }) => {
	return (
		<S.Link to={to}>
			<S.Text>{children}</S.Text>
		</S.Link>
	);
};

export default Link;
