import React from 'react';

import * as S from './styles';

const Text: React.FC = ({ children, ...rest }) => {
	return (
		<S.Container {...rest}>{children}</S.Container>
	);
};

export default Text;
