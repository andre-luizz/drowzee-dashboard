import styled from 'styled-components';
import TextBase from '../../DataDisplay/Text';
import colors from '../../../styles/colors';
import gradient from '../../../styles/gradient';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${gradient.button};
    height: 54px;
    width: 100%;
    max-width: 354px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    border: 0.3px solid ${colors.primary};
`;

export const Text = styled(TextBase)`
    font-size: 16px;
`;
