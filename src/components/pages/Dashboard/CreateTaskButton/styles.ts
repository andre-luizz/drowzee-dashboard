import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

import colors from '../../../../styles/colors';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 68px;
    background-color: ${colors.secondary};
    border-radius: 28px;
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    border: 0;
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
    }
`;

export const Icon = styled(FiPlus)`
    color: ${colors.primary};
    height: 35px;
    width: 35px;
`;
