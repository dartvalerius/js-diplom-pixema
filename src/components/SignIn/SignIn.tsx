import { InputType } from '../../types';
import { Button } from '../Button';
import { Input } from '../Input';
import { Logo } from '../Logo';
import './index.scss';

export const SignIn = () => {
    return (
        <div className='sign-in'>
            <div className='sign-in-header'>
                <Logo />
            </div>
            <div className="sign-in-container">
                <form name="signIn" className='sign-in-container-form' onSubmit={(e) => e.preventDefault()}>
                    <div className='sign-in-container-form__title'>Sign In</div>
                    <div style={{marginBottom: "40px"}}>
                        <Input title="Email" placeholder="Your email" type={InputType.EMAIL} onChange={(e: any) => {}}/>
                    </div>
                    <div style={{marginBottom: "16px"}}>
                        <Input title="Password" placeholder="Your password" type={InputType.PASSWORD} onChange={(e: any) => {}}/>
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