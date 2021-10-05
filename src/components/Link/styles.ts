import styled from 'styled-components';

import { Link as LinkBase } from 'react-router-dom';

import TextBase from '../Text';
import colors from '../../styles/colors';

export const Link = styled(LinkBase)`
    text-decoration: none;
`;

export const LinkText = styled(TextBase)`
    color: ${colors.primary};
    transition: color 0.2s;

    &:hover {
        color: #3F3D56;
    }
`;
