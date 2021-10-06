import React from 'react';
import * as S from './styles';

interface IIMage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

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
