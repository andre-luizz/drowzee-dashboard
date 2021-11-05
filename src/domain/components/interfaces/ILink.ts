import { LinkProps } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';

export interface ILink extends LinkProps {
    icon?: IconBaseProps;
}
