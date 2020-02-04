import React from "react";

import {
    FormInput,
} from './Style';

const Field = ({
        name,
        label,
        type,
        value,
        touched,
        errors,
        changeHandler
    }) => {

    const isError = undefined !== errors && touched;

    return (
            <div className={`form-item${isError ? ' has-error' : ''}`}>
                <label htmlFor="">{label}</label>
                <FormInput type={type} value={value}
                       onChange={(e) => changeHandler(e, name)} />
                {isError && <span className="error-message">{errors.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
            </div>
    );
};

export default Field;