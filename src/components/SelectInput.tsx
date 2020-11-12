import React from "react";
import { useField } from "formik";
import { SelectInputProps } from "../types";

export const SelectInput: React.FC<SelectInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ?
                <div className="validation-error">{meta.error}</div> : null
            }
        </div>
    );
};