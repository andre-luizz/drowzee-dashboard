import React from 'react';
import * as S from './styles';

const Heading: React.FC = ({ children }) => {
	return (
		<S.Container>{children}</S.Container>
	);
};

export default Heading;
