import styled, { css } from 'styled-components';
import TextBase from '../../DataDisplay/Text';
import colors from '../../../../styles/colors';
import gradient from '../../../../styles/gradient';

import { IButton } from '../../../../domain/components/interfaces/IButton';
import { EButtonVariant } from '../../../../domain/components/enums/EButton';

export const Container = styled.button<IButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${gradient.button};
    padding: 16px;
    height: 54px;
    width: 100%;
    min-width: 354px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    border: 0.3px solid ${colors.primary};

    ${({ variant }) => variant === EButtonVariant.secondary && css`
        background: ${colors.secondary};
        border: 1px solid ${colors.primary};
    `}
`;

export const Text = styled(TextBase)<IButton>`
    font-size: 16px;

    ${({ variant }) => variant === EButtonVariant.secondary && css`
        color: ${colors.primary};
    `}

`;
