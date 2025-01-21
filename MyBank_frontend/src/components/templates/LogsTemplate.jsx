const LogsTemplate = () => {
    return ( 
        <>
            <div className="w-full h-screen flex justify-center items-center flex-col">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="bg-mybanklogo1 bg-center bg-no-repeat bg-contain aspect-square w-1/4 -mt-40"></div>
                    <h1 className="text-2xl font-bold -mt-16 md:Montserrat">My Bank</h1>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-center mb-4">Sign in</h2>
                    <form action="">
                        <div className="flex justify-center items-start flex-col">
                            <label htmlFor="username" className="mb-2">Username :</label>
                            <input type="text" name="username" id="username" placeholder="username" className="w-full text-mybank-darkblue bg-neutral-300 rounded-lg p-1 px-3 mb-2" required />
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <label htmlFor="password" className="mb-2">Password :</label>
                            <input type="password" name="password" id="password" placeholder="password" className="w-full text-mybank-darkblue bg-neutral-300 rounded-lg p-1 px-3 mb-2" required />
                        </div>
                    </form>
                    <div className="flex justify-between">
                        <a href="#" className="italic text-xs transition-colors ease-in-out hover:text-mybank-green">Register</a>
                        <a href="#" className="italic text-xs transition-colors ease-in-out hover:text-mybank-green">Forgot my password ?</a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LogsTemplate;