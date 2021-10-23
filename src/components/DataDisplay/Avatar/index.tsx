import React from 'react';

import { IAvatar } from '../../../domain/components/interfaces/IAvatar';
import { useAuth } from '../../../hooks/auth';

import * as S from './styles';

const Avatar: React.FC<IAvatar> = ({ src, alt }) => {
	const { user } = useAuth();

	const userNameFirstLetter = user.name.charAt(0);

	if (src) {
		return <S.Avatar src={src} alt={alt} />;
	}

	return (
		<S.Container>
			<S.UserNameFirstLetter>{userNameFirstLetter}</S.UserNameFirstLetter>
		</S.Container>
	);
};

export default React.memo(Avatar);
