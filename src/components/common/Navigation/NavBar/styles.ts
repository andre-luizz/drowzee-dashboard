import styled from 'styled-components/macro';

import LinkBase from '../Link';
import Text from '../../DataDisplay/Text';

import colors from '../../../../styles/colors';

export const NavBarHeader = styled.header`
    position: absolute;
    top: 0;
    background-color: ${colors.primary};
    border-bottom: 2px solid #FFFFFF;
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: #FFFFFF;
        font-size: 48px;
        font-family: 'Mulish';
    }
`;

export const Container = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 292px;
    height: 100vh;
    padding: 16px;
    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`;

export const RoutesWrapper = styled.ul`
    list-style: none;
    padding: 22px 0;
    width: 100%;
`;

export const Route = styled.li`
    margin-bottom: 28px;
    width: 100%;
`;

export const Link = styled(LinkBase)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.primary};
    padding: 10px;
    border-radius: 35px;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

export const RouteTitle = styled(Text)`
    color: #fff;
    margin-left: 12px;
    font-size: 24px;
`;

export const NavBarFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 66px;
`;
