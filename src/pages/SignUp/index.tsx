import React from 'react';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpUserData } from '../../domain/pages/SignUp/interfaces/ISignUpUserData';
import { useHistory } from 'react-router-dom';

import SignUpImg from '../../assets/svg/sign-up-image.svg';
import Image from '../../components/common/DataDisplay/Image';
import TextField from '../../components/common/Input/TextField';
import Button from '../../components/common/Input/Button';

import schema from '../../helpers/pages/signUp/validations/schema';
import api from '../../services/api';

import * as S from './styles';

const SignUp: React.FC = () => {
	const history = useHistory();

	const { register, handleSubmit, formState: { errors } } = useForm<ISignUpUserData>({
		resolver: yupResolver(schema)
	});

	const onFormSubmit = React.useCallback( async (data: ISignUpUserData) => {
		await api.post('/users', data);

		history.push('/sign-in');
	}, []);

	return (
		<S.Container>

			<S.PageLeftSide>
				<Image
					src={SignUpImg}
					alt="signup-img"
					width={614}
					height={424}
				/>
			</S.PageLeftSide>

			<S.PageRightSide>

				<S.FormTitle>Create your account</S.FormTitle>
				<S.Form
					onSubmit={handleSubmit(onFormSubmit)}
					autoComplete="off">
					<TextField
						errorMessage={errors.name?.message}
						icon={FiUser}
						fieldName="name"
						placeholder="Name"
						register={register}
						required
					/>
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

					<Button type="submit">Create account</Button>

					<S.HaveAccountWrapper>
						<S.HaveAccountText>Already have an account ?</S.HaveAccountText>
						<S.HaveAccountLink to="/sign-in">Sign In.</S.HaveAccountLink>
					</S.HaveAccountWrapper>

				</S.Form>
			</S.PageRightSide>

		</S.Container>
	);
};

export default SignUp;
