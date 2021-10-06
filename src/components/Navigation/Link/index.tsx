import React from 'react';

import { ILink } from '../../../domain/components/interfaces/ILink';

import * as S from './styles';

const Link: React.FC<ILink> = ({ children, to }) => {
	return (
		<S.Link to={to}>
			<S.Text>{children}</S.Text>
		</S.Link>
	);
};

export default Link;