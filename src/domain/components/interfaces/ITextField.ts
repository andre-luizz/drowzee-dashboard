import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Path, UseFormRegister } from 'react-hook-form';

export interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<any>;
  required?: boolean;
  register: UseFormRegister<any>;
  icon?: React.ComponentType<IconBaseProps>;
  errorMessage?: string;
  secureTextField?: boolean;
}

export interface IStyleContainerProps {
    isFocused?: boolean;
    errorMessage?: string;
}
