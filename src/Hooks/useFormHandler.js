import { useState } from 'react';

export const useFormHandler = () => {
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm: '',
    });

    const handleInputChange = (e, field) => {
        delete errors[field];

        setTouched({
            ...touched,
            [field]: true,
        });
        setValues({
            ...values,
            [field]: e.currentTarget.value,
        });
    };

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

        setErrors(formErrors);

        return 0 === Object.keys(formErrors).length;
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        if (!validateForm(values)) {
            return;
        }

        alert(JSON.stringify(values));
    };

    return {
        touched,
        errors,
        values,
        handleInputChange,
        validateForm,
        handleRegistration
    }
};