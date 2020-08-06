import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    label {
        font-size: 1.4rem;
    }
    textarea {
        width: 100%;
        height: 16rem;
        min-height: 8rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        border: 1px solid var(--color-line-in-white);

        background-color: var(--color-input-background);
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
        font-size: 1.6rem;
        font-family: Archivo;
    }
    &:focus-within::after {
        width: calc(100% - 3.2rem);
        content: '';
        height: 2px;
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 8px;
    }
`;
