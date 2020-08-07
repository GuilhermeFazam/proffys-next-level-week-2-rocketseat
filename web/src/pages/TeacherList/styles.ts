import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    #search-teacher {
        margin-top: 3.2rem;
        label {
            color: var(--color-text-in-primary);
        }

        button {
            width: 100%;
            height: 5.6rem;
            background-color: var(--color-secundary);
            color: var(--color-button-text);
            border: 0;
            border-radius: 0.8rem;
            cursor: pointer;
            font-size: 1.6rem;
            font-weight: 700;
            font-family: 'Archivo';
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            outline: 0;
            transition: 0.2s ease-in-out;
            margin-top: 3rem;
            &:hover {
                background-color: var(--color-secundary-dark);
            }
        }
    }

    main {
        margin: 3.2rem auto;
        width: 90%;
    }

    @media (min-width: 700px) {
        min-width: 100%;

        #search-teacher .input-block + .input-block {
            margin-top: 0;
        }
        .form-element + .form-element {
            margin-top: 0;
        }
        #search-teacher {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 16px;
            position: absolute;
            bottom: -28px;

            button {
                width: 100%;
                font-size: 1.6rem;
                justify-content: center;
                margin-top: 3rem;
            }
        }

        main {
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }
    }
`;
