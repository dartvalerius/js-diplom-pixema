import { useState } from 'react';
import './index.scss';
import { ArrowDown, ArrowRight, UserIcon } from '../_media';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/action-creators';

export const User = ({username}: {username?: string}) => {
    const [menuIsShow, setMenuIsShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    if (username) {
        const userAcronym = username.replace(" ", "").split("").filter(c => c === c.toUpperCase());
        return (
            <div className='user-info' onClick={() => setMenuIsShow(!menuIsShow)}>
                <div className='user-info-acronym'>{userAcronym}</div>
                <div className='user-info-name'>{username.replace(" ", "\u00A0")}</div>
                <div className='user-info-menu-arrow'>
                    {
                        menuIsShow ? <ArrowDown /> : <ArrowRight />
                    }
                </div>

                <ul className={`user-info-menu ${menuIsShow ? "show" : ""}`}>
                    <li>Edit profile</li>
                    <li onClick={() => {
                        dispatch(logoutUser());
                        navigate('/signIn');
                    }}>Log Out</li>
                </ul>
            </div>
        )
    } else {
        return (
            <Link className='user-info' to="/signIn">
                <div className='user-info-acronym'><UserIcon /></div>
                <div className='user-info-name' style={{marginRight: "0"}}>{'Sign in'.replace(" ", "\u00A0")}</div>
            </Link>
        )
    }
}