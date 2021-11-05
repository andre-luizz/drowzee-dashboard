import React from 'react';

import { ILink } from '../../../../domain/components/interfaces/ILink';

import * as S from './styles';

const Link: React.FC<ILink> = ({ children, to, icon: Icon, ...rest }) => {
	return (
		<S.Link to={to} {...rest}>
			{Icon}
			<S.Text>{children}</S.Text>
		</S.Link>
	);
};

export default Link;
