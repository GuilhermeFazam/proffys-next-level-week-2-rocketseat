import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
    return (
        <Container className="select-block form-element">
            <label htmlFor={name}>{label}</label>
            <select value="" name={name} {...rest}>
                <option value="" disabled hidden>
                    Selecione uma opção
                </option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default Select;
