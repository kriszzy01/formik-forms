interface BaseInputProps {
    name: string;
    id?: string
}

export interface CheckboxInputProps extends BaseInputProps {
    children: React.ReactNode;
}

export interface SelectInputProps extends BaseInputProps {
    label: string;
}

export interface TextInputProps extends SelectInputProps { 
    placeholder: string;
    type: string;
}