/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './styles';

const Text: React.FC = ({ children }) => {
	return (
		<S.Container>{children}</S.Container>
	);
};

export default Text;
