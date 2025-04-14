import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
            <nav className="w-1/3 h-full flex justify-start items-center flex-col relative border-r-1 border-black">
                <ul>
                    <li><Link to="/" className="">Dashboard</Link></li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navigation;