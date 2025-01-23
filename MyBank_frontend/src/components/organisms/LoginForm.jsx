import FormField from "../molecules/FormField";

const LoginForm = ({ title }) => {
    const showForm = () => {
        if(title === 'Sign in') {
            return (
                <>
                    <form action="">
                        <FormField label="Username :" type="text" name="username" placeholder="username" />
                        <FormField label="Password :" type="password" name="password" placeholder="password" />
                    </form>
                </>
            )
        } else if (title === "Register") {
            return (
                <>
                    <form action="">
                        <FormField label="Username :" type="text" name="username" placeholder="username" />
                        <FormField label="Password :" type="password" name="password" placeholder="password" />
                        <FormField label="Confirm password :" type="password" name="confirmPassword" placeholder="password" />
                    </form>
                </>
            )
        }
    }

    return ( 
        <>
            <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
            { showForm() }
        </>
    );
}
 
export default LoginForm;