/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styles';

const Button: React.FC = ({ children }) => {
	return (
		<S.Container>
			<S.Text>{children}</S.Text>
		</S.Container>
	);
};

export default Button;
