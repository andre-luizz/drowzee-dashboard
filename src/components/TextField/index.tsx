import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Path, UseFormRegister } from 'react-hook-form';

import * as S from './styles';

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<any>;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<any>;
  icon?: React.ComponentType<IconBaseProps>;
  errorMessage?: string;
}

const TextField: React.FC<ITextField> = ({
	type,
	fieldName,
	required,
	placeholder,
	register,
	icon: Icon,
	errorMessage,
}) => {
	const [isFocused, setIsFocused] = React.useState(false);

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
					type={type}
					placeholder={placeholder}
					{...register(fieldName, { required })}
				/>
			</S.Container>
		</>
	);
};

export default React.memo(TextField);
