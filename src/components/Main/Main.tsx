import { ReactNode } from 'react';
import './index.scss';

export const Main = ({children}: {children: ReactNode}) => {
    return (
        <div className='wrapper'>
            <header className='header'>
                !!!!!!!
            </header>
            <main className='main'>
                <div className='main-menu'>!!!!!!</div>
                <div className='main-content'>{children}</div>
            </main>
            <footer className='footer'>
                !!!!!!
            </footer>
        </div>
    )
}