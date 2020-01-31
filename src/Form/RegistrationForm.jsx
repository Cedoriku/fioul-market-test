import React from 'react';
import './RegisterForm.css';
import { useFormHandler } from '../Hooks';

const RegistrationForm = () => {
    const formHandler = useFormHandler();
    const isEmailError = undefined !== formHandler.errors.email && formHandler.touched.email;
    const isPasswordError = undefined !== formHandler.errors.password && formHandler.touched.password;
    const isConfirmError = undefined !== formHandler.errors.confirm && formHandler.touched.confirm;

    return (
      <div className="RegisterForm">
        <h1>Registration form</h1>
        <form onSubmit={formHandler.submitRegistration}>
          <div className={`form-item${isEmailError ? ' has-error' : ''}`}>
            <label htmlFor="">Email</label>
            <input type="text" value={formHandler.values.email} onChange={(e) => formHandler.handleInputChange(e, 'email')} />
            {isEmailError && <span className="error-message">{formHandler.errors.email.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className={`form-item${isPasswordError ? ' has-error' : ''}`}>
            <label htmlFor="">Password</label>
            <input type="text" value={formHandler.values.password} onChange={(e) => formHandler.handleInputChange(e, 'password')} />
            {isPasswordError && <span className="error-message">{formHandler.errors.password.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className={`form-item${isConfirmError ? ' has-error' : ''}`}>
            <label htmlFor="">Confirm</label>
            <input type="text" value={formHandler.values.confirm} onChange={(e) => formHandler.handleInputChange(e, 'confirm')} />
            {isConfirmError && <span className="error-message">{formHandler.errors.confirm.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
          </div>
          <div className="form-item">
            <input type="submit" value="Register !" />
          </div>
        </form>
      </div>
    )
};

export default RegistrationForm;
