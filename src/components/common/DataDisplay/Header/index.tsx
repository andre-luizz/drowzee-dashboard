import React from 'react';

import Avatar from '../Avatar';

import { FiSettings } from 'react-icons/fi';
import { useAuth } from '../../../../hooks/auth';

import colors from '../../../../styles/colors';

import * as S from './styles';

const Header: React.FC = () => {
	const { user } = useAuth();

	return (
		<S.Container>

			<S.Content>

				<S.AvatarAndTitleWrapper>
					<Avatar />
					<S.HeaderTitle>Hello, {user.name}!</S.HeaderTitle>
				</S.AvatarAndTitleWrapper>

				<FiSettings size={30} color={colors.primary} />
			</S.Content>

		</S.Container>
	);
};

export default React.memo(Header);
