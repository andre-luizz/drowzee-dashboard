import React from 'react';

import { FiEye } from 'react-icons/fi';
import { ITextField } from '../../../../domain/components/interfaces/ITextField';

import * as S from './styles';

const TextField: React.FC<ITextField> = ({
	fieldName,
	required,
	placeholder,
	register,
	icon: Icon,
	errorMessage,
	secureTextField,
}) => {
	const [passwordShow, setPasswordShow] = React.useState(secureTextField);
	const [isFocused, setIsFocused] = React.useState(false);

	const togglePasswordVisibility = () => {
		setPasswordShow(!passwordShow);
	};

	const handleInputFocus = React.useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = React.useCallback(() => {
		setIsFocused(false);
	}, []);

	return (
		<>
			{errorMessage && <S.Error>{errorMessage}</S.Error>}
			<S.Container errorMessage={errorMessage} isFocused={isFocused} onBlur={handleInputBlur}>
				{Icon && <Icon size={20} />}
				<S.TextField
					onFocus={handleInputFocus}
					type={passwordShow ? 'password' : 'text'}
					placeholder={placeholder}
					{...register(fieldName, { required })}
				/>
				{secureTextField && <FiEye size={25} onClick={togglePasswordVisibility} /> }
			</S.Container>
		</>
	);
};

export default React.memo(TextField);
