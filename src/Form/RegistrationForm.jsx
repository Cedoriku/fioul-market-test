import React from 'react';
import './RegisterForm.css';
import { Form } from "./Elements";

const RegistrationForm = () => {
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
        {
            name: "confirm",
            label: "Confirm",
            type: "text"
        }
    ];
    const validateForm = (submittedValues) => {
        let formErrors = {};
        if (!submittedValues.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            formErrors = {
                ...formErrors,
                email: ['You have to provide a valid email.'],
            };
        }

        if (submittedValues.password.length < 5 || submittedValues.password.length > 16) {
            formErrors = {
                ...formErrors,
                password: ['Your password must be between 5 and 16 characters length.'],
            };
        }

        if (submittedValues.confirm.length < 5 || submittedValues.confirm.length > 16) {
            formErrors = {
                ...formErrors,
                confirm: ['Your password must be between 5 and 16 characters length.'],
            };
        }

        if (submittedValues.confirm !== submittedValues.password) {
            const passwordError = undefined !== formErrors.password
                ? [
                    ...formErrors.password,
                    'Your passwords must match.'
                ]
                : ['Your passwords must match'];

            formErrors = {
                ...formErrors,
                password: passwordError,
            };
        }

        return formErrors;
    };

    return (
        <div className="RegisterForm">
            <h1>Registration form</h1>
            <Form fields={fields}
                  validation={validateForm}
                  submitButtonValue={"Register!"}/>
        </div>
    )
};

export default RegistrationForm;
