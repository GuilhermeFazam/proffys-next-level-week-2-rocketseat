import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    .header-content {
        margin-bottom: 6.4rem;
    }

    main {
        background-color: var(--color-box-base);
        width: 100%;
        max-width: 74rem;
        border-radius: 0.8rem;
        margin: -3.2rem auto 3.2rem;
        padding-top: 6.4rem;
        overflow: hidden;
        label {
            color: var(--color-text-component);
        }
    }
    fieldset {
        border: 0;
        padding: 0 2.4rem;

        & + fieldset {
            margin-top: 6.4rem;
        }
        legend {
            font-weight: 700;
            font-size: 2.4rem;
            font-family: 'Archivo', sans-serif;
            color: var(--color-text-title);
            margin-bottom: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-bottom: 1.6rem;
            border-bottom: 1px solid var(--color-line-in-white);

            button {
                border: 0;
                background: none;
                color: var(--color-primary);
                font-weight: 700;
                font-size: 1.6rem;
                font-family: 'Archivo', sans-serif;
                cursor: pointer;
                transition: color 0.2s;

                &:hover {
                    color: var(--color-primary-dark);
                }
            }
        }
    }

    footer {
        padding: 4rem 2.4rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: var(--color-text-complement);

            img {
                margin-right: 2rem;
            }
        }
        button {
            font-weight: 700;
            font-size: 1.6rem;
            font-family: 'Archivo', sans-serif;
            background-color: var(--color-secundary);
            color: var(--color-button-text);
            width: 100%;
            height: 5.6rem;
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
            margin-top: 3.2rem;

            &:hover {
                background-color: var(--color-secundary-dark);
            }
        }
    }

    @media (min-width: 700px) {
        min-width: 100%;

        .header-content {
            margin-bottom: 0;
        }
        main {
            fieldset {
                padding: 0 6.4rem;
            }
            .form-element + .form-element {
                margin-top: 0;
            }
            .schedule-item {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                column-gap: 1.6rem;
            }
            footer {
                padding: 4rem 6.4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                p {
                    justify-content: space-between;
                }
                button {
                    width: 20rem;
                    margin-top: 0;
                }
            }
        }
    }
`;
