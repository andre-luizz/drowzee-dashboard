import styled from 'styled-components/macro';

import colors from '../../../../styles/colors';

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
`;

export const Content = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.secondary};
    border-radius: 20px;
    padding: 22px;
    display: flex;
    flex-direction: column;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 18px;
`;

export const AddTaskButton = styled.button`
    width: 169px;
    height: 54px;
    background: ${colors.primary};
    border-radius: 10px;
    border: 0;
    margin-right: 16px;
    color: ${colors.secondary};
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(85%);
    }
`;

export const ExitTaskButton = styled.button`
    width: 169px;
    height: 54px;
    background: ${colors.secondary};
    border-radius: 10px;
    border: 1px solid ${colors.primary};
    margin-right: 16px;
    color: ${colors.primary};
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(95%);
    }
`;
