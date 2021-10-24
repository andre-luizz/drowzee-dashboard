import React from 'react';
import { EButtonVariant } from '../../../../domain/components/enums/EButton';

import { IButton } from '../../../../domain/components/interfaces/IButton';

import * as S from './styles';

const Button: React.FC<IButton> = ({
	variant = EButtonVariant.primary,
	children,
	...rest }) => {
	return (
		<S.Container
			variant={variant}
			{...rest}>
			<S.Text variant={variant}>{children}</S.Text>
		</S.Container>
	);
};

export default Button;
