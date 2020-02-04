import React from 'react';
import './RegisterForm.css';
import { Form } from "./Elements";

const Login = () => {
    const fields = [
        {
            name: "email",
            label: "Email",
            type: "text"
        },
        {
            name: "password",
            label: "Password",
            type: "text"
        },
    ];

    const checkUser = values => {
        return values.email === 'toto' && values.password === 'tututu';
    };
    const loginCheck = (values) => {

        let formErrors = {};

        if (!checkUser(values)) {
            formErrors = {
                form: ['Login error'],
            };
        }

        return formErrors;
    };

    return (
        <div className="LoginForm">
            <Form fields={fields}
                  validation={loginCheck}
                  submitButtonValue={'Me connecter'}>

                <div className="form-item">
                    <a href="/#" >Mot de passe oublié ?</a>
                </div>

            </Form>
        </div>
    )
};

export default Login;
