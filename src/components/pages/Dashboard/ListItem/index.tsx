import React from 'react';

import * as S from './styles';

interface IListItem {
    toogleTask?: () => void;
}

const ListItem: React.FC<IListItem> = ({ children, toogleTask }) => {
	return (
		<S.Container>
			<S.Text>{children}</S.Text>
			<S.ExitIcon onClick={toogleTask} />
		</S.Container>
	);
};

export default ListItem;
