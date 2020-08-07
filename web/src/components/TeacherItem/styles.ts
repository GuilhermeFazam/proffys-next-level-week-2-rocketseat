import styled from 'styled-components';

export const Container = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;
        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }
        div {
            margin-left: 2.4rem;
            strong {
                font-weight: 700;
                font-size: 2.4rem;
                font-family: 'Archivo';
                display: block;
                color: var(--color-text-title);
            }
            span {
                font-size: 1.6rem;
                display: block;
                margin-top: 0.4rem;
            }
        }
    }

    .description {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    footer {
        padding: 3.2rem 2rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p strong {
            color: var(--color-primary);
            font-size: 1.6rem;
            display: block;
        }
        a {
            width: 20rem;
            height: 5.6rem;
            background-color: var(--color-secundary);
            color: var(--color-button-text);
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            font-size: 1.4rem;
            font-weight: 700;
            font-family: 'Archivo';
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            outline: 0;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            &:hover {
                background-color: var(--color-secundary-dark);
            }
        }
    }

    @media (min-width: 700px) {
        header,
        footer {
            padding: 3.2rem;
        }

        .description {
            padding: 0 3.2rem;
        }

        footer p strong {
            display: initial;
            margin-left: 1.6rem;
        }

        footer a {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }

        footer a img {
            margin-right: 1.6rem;
        }
    }
`;
