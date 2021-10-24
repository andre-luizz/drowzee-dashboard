import styled from 'styled-components/macro';
import colors from '../../../../styles/colors';
import shadows from '../../../../styles/shadows';
import Text from '../Text';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px ${shadows.avatar};
`;

export const UserNameFirstLetter = styled(Text)`
    font-size: 24px;
`;

export const Avatar = styled.img`
    box-shadow: 0px 4px 4px ${shadows.avatar};
    height: 60px;
    width: 60px;
    border-radius: 50%;
`;
