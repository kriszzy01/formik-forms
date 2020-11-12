import React from "react";
import { useField } from "formik"
import { CheckboxInputProps } from "../types";

export const Checkbox: React.FC<CheckboxInputProps> = ({ children, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error
                ? <div>{meta.error}</div> : null
            }
        </div>
    );
};