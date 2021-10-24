import React from 'react';
import * as S from './styles';

const Heading: React.FC = ({ children, ...rest }) => {
	return (
		<S.Container {...rest} >{children}</S.Container>
	);
};

export default Heading;
