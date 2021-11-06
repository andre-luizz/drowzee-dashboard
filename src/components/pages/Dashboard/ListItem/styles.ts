import styled from 'styled-components/macro';

import TextBase from '../../../common/DataDisplay/Text';
import { FiTrash } from 'react-icons/fi';

import colors from '../../../../styles/colors';

export const Container = styled.li`
    padding: 22px;
    width: 300px;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primary};
    border-radius: 10px;
    margin-bottom: 18px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    transition: transform 0.2s;

    &:hover {
        transform: translateX(10px);
        cursor: pointer;
    }
`;

export const Text = styled(TextBase)`
    color: ${colors.input};
    word-wrap: break-word;
`;

export const ExitIcon = styled(FiTrash)`
    color: #7B7B7B;
    cursor: pointer;
    height: 15px;
    width: 15px;
    transition: all 0.2s;

    &:hover {
        height: 16px;
        width: 16px;
        color: red;
    }
`;
