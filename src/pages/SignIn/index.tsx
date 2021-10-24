import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { ISignInUserData } from '../../domain/pages/SignIn/interfaces/ISignInUserData';
import { useAuth } from '../../hooks/auth';

import SignInImg from '../../assets/svg/sign-in-image.svg';
import Image from '../../components/common/DataDisplay/Image';
import TextField from '../../components/common/Input/TextField';
import Button from '../../components/common/Input/Button';

import schema from '../../helpers/pages/signIn/validations/schema';

import * as S from './styles';

const SignIn: React.FC = () => {

	const { signIn } = useAuth();

	const { register, handleSubmit, formState: { errors } } = useForm<ISignInUserData>({
		resolver: yupResolver(schema)
	});

	const onFormSubmit = React.useCallback((data: ISignInUserData) => {
		const { email, password } = data;

		signIn({
			email,
			password,
		});
	}, []);

	return (
		<S.Container>

			<S.PageLeftSide>

				<S.FormTitle>Login account</S.FormTitle>
				<S.Form
					onSubmit={handleSubmit(onFormSubmit)}
					autoComplete="off">
					<TextField
						errorMessage={errors.email?.message}
						icon={FiMail}
						fieldName="email"
						placeholder="Email"
						register={register}
						required
					/>
					<TextField
						errorMessage={errors.password?.message}
						secureTextField
						icon={FiLock}
						fieldName="password"
						placeholder="Password"
						register={register}
						required
					/>

					<Button type="submit">Login</Button>

					<S.NoAccountWrapper>
						<S.NoAccountText>No have an account ?</S.NoAccountText>
						<S.NoAccountLink to="/">Sign Up.</S.NoAccountLink>
					</S.NoAccountWrapper>

				</S.Form>

			</S.PageLeftSide>

			<S.PageRightSide>
				<Image src={SignInImg} alt="sign-in-image" width={631} height={436} />
			</S.PageRightSide>

		</S.Container>
	);
};

export default SignIn;
