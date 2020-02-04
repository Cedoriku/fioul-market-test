import React from "react";
import {useFormHandler} from "../../Hooks";
import Field from "./Field";

import {
    SubmitButton
} from './Style';

const Form = ({ fields, submitButtonValue, validation, children }) => {

    const {
        values,
        errors,
        touched,
        handleInputChange,
        submit
    } = useFormHandler(fields);

    const isFormError = undefined !== errors.form;

    return (
        <form onSubmit={(e) => submit(e, validation)}>

            {fields.map(
                (field, i) => <Field key={i}
                                     {...field}
                                     value={values[field.name]}
                                     touched={touched[field.name]}
                                     errors= {errors[field.name]}
                                     changeHandler={handleInputChange}
                            />
            )}

            {/* Additional form content */}
            {children}

            <div className={`form-item${isFormError ? ' has-error' : ''}`}>
                {isFormError && <span className="error-message">{errors.form.map((err, k) => <span key={k} className="error-item">{err}</span>)}</span>}
            </div>
            <div className="form-item">
                <SubmitButton type="submit" value={submitButtonValue} />
            </div>
        </form>
    );
};

export default Form;