import React from 'react';

import { EButtonVariant } from '../enums/EButton';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: EButtonVariant;
}
