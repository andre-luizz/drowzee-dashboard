import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Path, UseFormRegister } from 'react-hook-form';
import { FiEye } from 'react-icons/fi';

import * as S from './styles';

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<any>;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<any>;
  icon?: React.ComponentType<IconBaseProps>;
  errorMessage?: string;
  secureTextField?: boolean;
}

const TextField: React.FC<ITextField> = ({
	fieldName,
	required,
	placeholder,
	register,
	icon: Icon,
	errorMessage,
	secureTextField,
}) => {
	const [passwordShow, setPasswordShow] = React.useState(false);
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
					type={passwordShow ? 'text' : 'password'}
					placeholder={placeholder}
					{...register(fieldName, { required })}
				/>
				{secureTextField && <FiEye size={25} onClick={togglePasswordVisibility} /> }
			</S.Container>
		</>
	);
};

export default React.memo(TextField);
