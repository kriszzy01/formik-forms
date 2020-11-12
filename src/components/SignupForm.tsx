import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Checkbox } from "./Checkbox";
import { SelectInput } from "./SelectInput";
import { TextInput } from "./TextInput";

interface InitialValues {
    firstName: string;
    lastName: string;
    email: string;
    acceptedTerms: boolean;
    jobType: string;
};

export const SignupForm: React.FC = () => {
    const initialValues: InitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        acceptedTerms: false,
        jobType: "",
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={yup.object({
                firstName: yup.string().required("First Name is required"),
                lastName: yup.string().required("Last Name is required"),
                email: yup.string()
                    .email("Invalid email format")
                    .required("Email address is required"),
                acceptedTerms: yup.boolean()
                    .required("Pl")
                    .oneOf([true], "You must accept the terms and condition"),
                jobType: yup.string()
                    .oneOf(['designer', 'development', 'product', 'other'], "Invalid job type")
                    .required("You muse select a job type")
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            <Form>
                <TextInput
                    name="firstName"
                    label="First Name"
                    placeholder="Jane"
                    type="text"
                />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    placeholder="Doe"
                    type="text"
                />

                <TextInput
                    name="email"
                    label="Email"
                    placeholder="janedoe@xyz.com"
                    type="text"
                />

                <SelectInput label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </SelectInput>

                <Checkbox name="acceptedTerms" children="I accept the terms and conditions" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};