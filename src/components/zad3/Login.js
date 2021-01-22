import React, {useState} from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ];
};

export default function Login({usersData}) {

    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const [errors, setErrors] = useState({email: "", password: ""});
    const [success, setSucces] = useState(false);

    const [emailField, resetInputField] = useInput("");
    const [passwordField, resetPasswordField] = useInput("");

    const onSubmit = e => {
        e.preventDefault()
        const isEmailValid = emailRegex.test(emailField.value);

        if (isEmailValid) {

            const isEmailCorrect = Object.keys(usersData).includes(emailField.value);

            if (isEmailCorrect) {
                if (usersData[emailField.value].password !== passwordField.value) {
                    setErrors({password: "Password is incorrect."});
                } else {
                    setSucces(true);
                    setErrors({email: "", password: ""})
                    resetInputField()
                    resetPasswordField()
                }

            } else {
                setErrors({email: "Account with this e-mail address does not exist."});
            }

        } else {
            setErrors({email: "E-mail address is invalid."});
        }
    };

    return (
        <>
            <h3>Sign in</h3>
            <form onSubmit={onSubmit}>
                {success ? <div>Success!</div> : <></>}

                <input {...emailField} type="text"
                       placeholder="Enter e-mail" required/>
                <small style={{color: "red"}}>{errors.email}</small>
                <br/>

                <input  {...passwordField} type="password"
                        placeholder="Enter password" required/>
                <small style={{color: "red"}}>{errors.password}</small>
                <br/>

                <button>Sign in</button>

            </form>

        </>

    );
}