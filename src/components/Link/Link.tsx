import { NavLink } from 'react-router-dom';
import { ILink } from '../../types';
import './index.scss';

export const Link = ({children, title, path, active, disabled}: ILink) => {
    if(disabled) {
        return (
            <div className='link disabled'>
                {children}
                {title}
            </div>
        )
    } else {
        return (
            <NavLink className={`link ${active && 'active'}`} to={path}>
                {children}
                {title}
            </NavLink>
        )
    }
}