import React from "react";
import { useField } from "formik"
import { TextInputProps } from "../types";

export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};