import styled, { css } from 'styled-components/macro';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

interface IContainerProps {
    isFocused?: boolean;
    errorMessage?: string;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.primary};
    font-family: ${fonts.body};
    width: 354px;
    height: 54px;
    background-color: ${colors.secondary};
    border: 2px solid ${colors.input};
    border-radius: 10px;
    margin-bottom: 22px;

    svg {
        margin-left: 16px;
        margin-right: 7px;
    }

    ${({ isFocused }) => isFocused && css`
        border: 2px solid ${colors.primary};
    ` }

    ${({ errorMessage }) => errorMessage && css`
        border: 2px solid red;
    `}
`;

export const TextField = styled.input`
    font-family: ${fonts.body};
    color: ${colors.primary};
    width: 354px;
    height: 54px;
    background-color: transparent;
    border: 0;
    border-radius: 10px;

    &::placeholder {
        font-family: ${fonts.body};
        color: ${colors.primary};
    }

`;

export const Error = styled.span`
    font-size: 14px;
    letter-spacing: 1.5px;
    font-family: ${fonts.body};
    color: red;
`;
