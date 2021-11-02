import styled from 'styled-components/macro';

import colors from '../../../../styles/colors';

import fonts from '../../../../styles/fonts';

export const Container = styled.input`
    padding: 22px;
    width: 500px;
    height: 100px;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.input};
    border-radius: 10px;
    font-size: 16px;
    font-family: ${fonts.body};
    color: ${colors.input};

    &::placeholder {
        color: ${colors.input};
        font-size: 16px;
    }
`;
