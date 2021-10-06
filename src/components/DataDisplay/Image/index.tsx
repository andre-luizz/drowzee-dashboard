import React from 'react';

import { IIMage } from '../../../domain/components/interfaces/IImage';

import * as S from './styles';

const Image: React.FC<IIMage> = ({ src, alt, width, height,...rest }) => {
	return (
		<S.Container
			src={src}
			alt={alt}
			width={width}
			height={height}
			{...rest} />
	);
};

export default React.memo(Image);
