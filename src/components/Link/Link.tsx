import { Link } from 'react-router-dom';
import { ILink } from '../../types';
import './index.scss';

export const ItemLink = ({children, title, path, active, disabled}: ILink) => {
    if(disabled) {
        return (
            <div className='link disabled'>
                {children}
                {title}
            </div>
        )
    } else {
        return (
            <Link className={`link ${active? 'active' : ''}`} to={path}>
                {children}
                {title}
            </Link>
        )
    }
}