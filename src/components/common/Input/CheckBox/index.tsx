import React from 'react';

import * as S from './styles';

const CheckBox: React.FC = () => {
	return (
		<S.Container>
			<S.CheckBox type="checkbox" />
			<S.CheckMark />
		</S.Container>
	);
};

export default CheckBox;
