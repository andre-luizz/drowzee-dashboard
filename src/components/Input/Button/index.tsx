import React from 'react';

import { IButton } from '../../../domain/components/interfaces/IButton';

import * as S from './styles';

const Button: React.FC<IButton> = ({ children, ...rest }) => {
	return (
		<S.Container {...rest}>
			<S.Text>{children}</S.Text>
		</S.Container>
	);
};

export default Button;
