import * as React from 'react';

const BackLogo = ({ handleClick }) => {
    const [fill, setFill] = React.useState('#D9D9D9')

    const handleMouseEnter = () => {
        setFill('#59E5A9');
    }

    const handleonMouseLeave = () => {
        setFill('#D9D9D9');
    }

    return (
        <div className='w-10 aspect-square cursor-pointer' onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleonMouseLeave} >
            <svg fill={fill} viewBox="0 0 32 32" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path d="M11.17,10.23a33.37,33.37,0,0,0-3.05,3.13c-.51.62-1.28,1.3-1.21,2.17s.81,1.24,1.35,1.76a16.3,16.3,0,0,1,2.57,3.17c.86,1.36,3,.11,2.16-1.26a21.06,21.06,0,0,0-1.82-2.48A16.16,16.16,0,0,0,10,15.52c-.22-.21-.86-1.14-.68-.49l-.13,1a17.85,17.85,0,0,1,3.72-4c1.19-1.08-.58-2.85-1.77-1.76Z"></path>
                    <path d="M9.4,17a109.13,109.13,0,0,0,12.53-.1c1.59-.11,1.61-2.61,0-2.5a109.13,109.13,0,0,1-12.53.1c-1.61-.07-1.6,2.43,0,2.5Z"></path>
                </g>
            </svg>
        </div>
    );
}
 
export default BackLogo;