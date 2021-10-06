import styled from 'styled-components';

import { Link as LinkBase } from 'react-router-dom';

import TextBase from '../Text';
import colors from '../../styles/colors';

export const Link = styled(LinkBase)`
    text-decoration: none;
`;

export const Text = styled(TextBase)`
    color: ${colors.primary};
    transition: color 0.1s;

    &:hover {
        color: ${colors.linkHover};
    }
`;
