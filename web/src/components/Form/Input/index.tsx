import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return (
        <Container className="input-block form-element">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} {...rest} />
        </Container>
    );
};

export default Input;
