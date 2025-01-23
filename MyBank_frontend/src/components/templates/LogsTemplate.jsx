import * as React from 'react';
import LoginForm from "../organisms/LoginForm";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import BackLogo from '../atoms/BackLogo';

const LogsTemplate = () => {
    const [title, setTitle] = React.useState('Sign in');

    const handleRegister = () => {
        console.log("Registering !");
        setTitle('Register');
    }
    
    const handleBack = () => {
        console.log("Back !");
        setTitle('Sign in');
    }

    const handleLog = () => {
        console.log('Logging in...');
    }

    // TODO : ADD FORGOT PASSWORD SYSTEM
    const handleForgot = () => {
        console.log("Forgot my password ?");
    }

    return ( 
        <>
            <div className="w-full h-screen flex justify-center items-center flex-col">
                <div className="w-full flex justify-center items-center flex-col">
                    <Logo width="w-1/4" />
                    <h1 className="text-2xl font-bold -mt-16 md:Montserrat">My Bank</h1>
                </div>
                <div className="mt-8">
                    < LoginForm title={title} />

                    { title === "Sign in" ?
                        <>
                            <div className="flex justify-between w-full">
                                <Button label="Register" handleClick={() => handleRegister()} />
                                <Button label="Forgot my password ?" handleClick={() => handleForgot()} />
                            </div>
                            <div className='flex justify-center'>
                                <button className='m-2 p-2' onClick={() => handleLog()}>{title}</button>
                            </div>
                        </>
                        :
                        <div className="flex justify-between items-center w-full">
                            <BackLogo handleClick={() => handleBack()} />
                            <button className='m-2 p-2' onClick={() => handleLog()}>{title}</button>
                        </div>
                    }
                    
                </div>
            </div>
        </>
    );
}
 
export default LogsTemplate;