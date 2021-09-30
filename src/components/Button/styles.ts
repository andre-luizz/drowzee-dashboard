import styled from 'styled-components';
import TextBase from '../../components/Text';
import colors from '../../styles/colors';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    height: 54px;
    width: 100%;
    min-width: 354px;
    border: 0;
    border-radius: 10px;
    transition: background-color 0.1s;

    &:hover {
        cursor: pointer;
        background-color: ${colors.buttonHover};
    }
`;

export const Text = styled(TextBase)``;
