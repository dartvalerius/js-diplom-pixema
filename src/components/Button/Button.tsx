import { ButtonType, IButton } from '../../types';
import './index.scss';

export const Button = ({ content, type = ButtonType.PRIMARY, disabled, onClick }: IButton) => {
    return (
        <button className={`btn btn-${type}`} disabled={disabled} onClick={() => onClick()}>{ content }</button>
    )
}