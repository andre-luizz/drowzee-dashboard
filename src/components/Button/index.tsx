import React from 'react';
import * as S from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button: React.FC<IButton> = ({ children, ...rest }) => {
	return (
		<S.Container {...rest}>
			<S.Text>{children}</S.Text>
		</S.Container>
	);
};

export default Button;
