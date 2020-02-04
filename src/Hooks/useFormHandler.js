import { useState } from 'react';

export const useFormHandler = (fields) => {
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const initialValues = {};
    fields.forEach(field => initialValues[field.name] = '');
    const [values, setValues] = useState(initialValues);

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

    const validateForm = (validation) => {
        let formErrors = validation(values);
        setErrors(formErrors);

        return 0 === Object.keys(formErrors).length;
    };

    const submit = (e, validation) => {
        e.preventDefault();

        if (!validateForm(validation)) {
            return;
        }

        alert(JSON.stringify(values));
    };

    return {
        touched,
        errors,
        values,
        handleInputChange,
        submit,
    }
};