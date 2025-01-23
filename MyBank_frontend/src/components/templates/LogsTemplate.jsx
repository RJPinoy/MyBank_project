import * as React from 'react';
import LoginForm from "../organisms/LoginForm";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import backLogo from '../../assets/back.svg';

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
                        <div className="flex justify-between">
                            <Button label="Register" handleClick={() => handleRegister()} />
                            <Button label="Forgot my password ?" handleClick={() => handleForgot()} />
                        </div>
                        :
                        <div className="flex justify-between">
                            <img id='backlogo' src={backLogo} alt="Back Logo" className="w-10 aspect-square" />
                            <Button label="back" handleClick={() => handleBack()} />
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
 
export default LogsTemplate;