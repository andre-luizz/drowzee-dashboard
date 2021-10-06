import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Path, UseFormRegister } from 'react-hook-form';

export interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
    fieldName: Path<any>;
    required?: boolean;
    placeholder?: string;
    register: UseFormRegister<any>;
    icon?: React.ComponentType<IconBaseProps>;
    errorMessage?: string;
    secureTextField?: boolean;
  }
