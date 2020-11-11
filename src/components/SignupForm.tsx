import React from "react";
import { useFormik } from "formik";

interface InitialValues {
    firstName: string;
    email: string;
}

export const SignupForm: React.FC = () => {
    const initialValues: InitialValues = {
        firstName: "",
        email: ""
    };

    const handleFormSubmit = (values: InitialValues): void => {
        console.log(JSON.stringify(values, null, 2))
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleFormSubmit
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};