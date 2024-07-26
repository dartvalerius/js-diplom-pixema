import { ReactNode } from 'react';
import './index.scss';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { User } from '../User';
import { ItemLink } from '../Link';
import { Favorites, Home, Setting, Trends } from '../_media';
import { useSelector } from 'react-redux';
import { IStorState } from '../../types';

export const Main = ({children}: {children: ReactNode}) => {
    const user = useSelector((state: IStorState) => state.user.user)
    return (
        <div className='main'>
            <div className='main-menu'>
                <Logo/>
                <ul className='main-menu-list'>
                    <li>
                        <ItemLink title='Home' path='/' active>
                            <Home />
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink title='Favorites' path='/'>
                            <Favorites />
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink title='Settings' path='/'>
                            <Setting />
                        </ItemLink>
                    </li>
                </ul>
                <div className='main-menu-copyright'>
                    © All Rights Reserved
                </div>
            </div>
            <div className='wrapper'>
                <header className='header'>
                    <Search onChange={()=> {}} onClickFilter={() => {}}/>
                    <User username={user.username}/>
                </header>
                <main className='main-content'>
                    {children}
                </main>
                <footer className='footer'>
                    !!!!!!
                </footer>
            </div>
        </div>
    )
}