import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
    return (
        <Container className="textarea-block form-element">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} name={name} {...rest} />
        </Container>
    );
};

export default Textarea;
