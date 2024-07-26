import { useState } from 'react';
import { InputType } from '../../types';
import { Button } from '../Button';
import { Input } from '../Input';
import { Logo } from '../Logo';
import './index.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/action-creators';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const navigation = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className='sign-in'>
            <div className='sign-in-header'>
                <Logo />
            </div>
            <div className='sign-in-container'>
                <form name='signIn' className='sign-in-container-form' onSubmit={(e) => {
                    e.preventDefault();
                    if(email === 'mail@mail.ru' && password === '123'){
                        setErrorText('');
                        dispatch(setUser({
                            email: 'mail@mail.ru', 
                            username: 'Filippenkov Valeriy',
                            apiKey: '5b253f23',
                            favorites: ['tt0120915', 'tt0121765', 'tt0121766', 'tt0076759', 'tt0080684', 'tt0086190']
                        }));
                        navigation('/');
                    } else {
                        setErrorText('Неверный логин или пароль')
                    }
                }}>
                    <div className='sign-in-container-form__title'>Sign In</div>
                    <div style={{marginBottom: "40px"}}>
                        <Input title="Email" value={email} placeholder="Your email" type={InputType.EMAIL} errorText={errorText} onChange={(e: any) => setEmail(e.target.value)}/>
                    </div>
                    <div style={{marginBottom: "16px"}}>
                        <Input title="Password" value={password} placeholder="Your password" type={InputType.PASSWORD} errorText={errorText} onChange={(e: any) => setPassword(e.target.value)}/>
                    </div>
                    <div style={{marginBottom: "48px"}}>
                        <a href="#" className={`sign-in-link`}>Forgot password?</a>
                    </div>
                    <div style={{marginBottom: "24px"}}>
                        <Button content="Sign In" onClick={() => {}} />
                    </div>
                </form>
            </div>
        </div>
    )
}