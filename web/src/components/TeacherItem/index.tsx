import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Container } from './styles';

const TeacherItem: React.FC = () => {
    return (
        <Container className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/5084382?s=460&u=a0594186c875d50447d8d9b8bdc37ae320805631&v=4"
                    alt="Guilherme Fazam"
                />
                <div>
                    <strong>Guilherme Fazam</strong>
                    <span>Front-End</span>
                </div>
            </header>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                nesciunt voluptatem iure inventore magnam ipsa quaerat aliquid,
                neque nisi, atque vel saepe dolore vero! Quod non suscipit
                voluptatibus dolorum voluptate?
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="submit">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </Container>
    );
};

export default TeacherItem;
