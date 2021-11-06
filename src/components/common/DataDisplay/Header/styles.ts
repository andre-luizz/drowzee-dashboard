import styled from 'styled-components/macro';

import Text from '../Text';

import colors from '../../../../styles/colors';

export const Container = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid ${colors.primary};
    height: 150px;
    width: 100%;
    z-index: 0;
`;

export const Content = styled.div`
    position: absolute;
    top: 25%;
    left: 15%;
    width: 85%;
    padding: 0 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AvatarAndTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
`;

export const HeaderTitle = styled(Text)`
    margin-left: 12px;
    color: ${colors.primary};
    font-size: 24px;
`;
