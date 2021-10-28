import styled from 'styled-components/macro';

import TextBase from '../../../common/DataDisplay/Text';

import colors from '../../../../styles/colors';

export const Container = styled.li`
    padding: 22px;
    width: 300px;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primary};
    border-radius: 10px;
    margin-bottom: 18px;
    list-style: none;
`;

export const Text = styled(TextBase)`
    color: ${colors.input};
    word-wrap: break-word;
`;
