import React from 'react';

import * as S from './styles';

const ListItem: React.FC = ({ children }) => {
	return (
		<S.Container>
			<S.Text>{children}</S.Text>
		</S.Container>
	);
};

export default ListItem;
