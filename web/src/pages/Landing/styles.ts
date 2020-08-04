import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background: var(--color-primary);

    .logo-container {
        text-align: center;
        margin-bottom: 3.2rem;
        img {
            height: 10rem;
        }
        h2 {
            font-weight: 500;
            font-size: 2em;
            line-height: 4.6rem;
            margin-top: 0.8rem;
        }
    }

    .hero-image {
        width: 100%;
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin: 3.2rem 0;
        a {
            width: 30rem;
            height: 10.4rem;
            border-radius: 0.8rem;
            font-weight: 700;
            font-size: 2rem;
            font-family: 'Archivo', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: var(--color-button-text);
            transition: background-color 0.2s ease-in-out;
            &:first-child {
                margin-right: 1.6rem;
            }

            &.study {
                background-color: var(--color-primary-lighter);
                &:hover {
                    background-color: var(--color-primary-light);
                }
            }

            &.give-classes {
                background-color: var(--color-secundary);
                &:hover {
                    background-color: var(--color-secundary-dark);
                }
            }
        }
        img {
            width: 4rem;
            margin-right: 0.8rem;
        }
    }

    .total-conections {
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            margin-left: 0.8rem;
        }
    }

    @media (min-width: 1100px) {
        #page-landing-content {
            max-width: 1100px;
            display: grid;

            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;

            grid-template-areas:
                'logo hero hero'
                'buttons buttons total';
        }

        .logo-container {
            grid-area: logo;
            align-self: center;
            margin: 0;
            text-align: center;
            img {
                height: 100%;
            }
            h2 {
                text-align: initial;
                font-size: 3.6rem;
            }
        }

        .hero-image {
            grid-area: hero;
            justify-self: end;
        }

        .button-container {
            grid-area: buttons;
            justify-content: flex-start;

            a {
                font-size: 2.4rem;
            }

            img {
                width: 4rem;
                margin-right: 2.4rem;
            }
        }

        .total-conections {
            grid-area: total;
            justify-self: end;
        }
    }
`;
