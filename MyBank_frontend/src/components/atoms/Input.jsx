const Input = ({ type, name, placeholder }) => {
    return (  
        <>
            <input type={type} name={name} id={name} placeholder={placeholder} className="w-full text-mybank-darkblue bg-neutral-300 rounded-lg p-1 px-3 mb-2" required />
        </>
    );
}
 
export default Input;