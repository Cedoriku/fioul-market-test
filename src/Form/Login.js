import React from 'react';
import { useFormHandler } from '../Hooks';
import './RegisterForm.css';
import {
    FormInput,
    SubmitButton
} from './Style';

const Login = () => {
    const formHandler = useFormHandler();
    const isLoginError = undefined !== formHandler.errors.login;

    return (
        <div className="RegisterForm">
            <form onSubmit={formHandler.handleLogin}>
                <div className={`form-item${isLoginError ? ' has-error' : ''}`}>
                    <label htmlFor="">Email</label>
                    <FormInput type="text" value={formHandler.values.email} onChange={(e) => formHandler.handleInputChange(e, 'email')} />
                </div>
                <div className={`form-item${isLoginError ? ' has-error' : ''}`}>
                    <label htmlFor="">Password</label>
                    <FormInput type="text" value={formHandler.values.password} onChange={(e) => formHandler.handleInputChange(e, 'password')} />
                </div>
                <div className={`form-item${isLoginError ? ' has-error' : ''}`}>
                    <a href="/#" >Mot de passe oublié ?</a>
                </div>
                <div className="form-item">
                    {isLoginError && <span className="error-message">{formHandler.errors.login.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
                    <SubmitButton type="submit" value="Me connecter" />
                </div>
            </form>
        </div>
    )
};

export default Login;
