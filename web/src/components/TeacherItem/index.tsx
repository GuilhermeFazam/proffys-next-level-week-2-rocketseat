import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import { Container } from './styles';
import api from '../../services/api';

export interface Classes {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    subject: string;
    cost: number;
    bio: string;
}

interface TeacherItemProps {
    classes: Classes;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes }) => {
    function createNewConnectcion(): void {
        api.post('connections', {
            user_id: classes.id,
        });
    }

    return (
        <Container className="teacher-item">
            <header>
                <img src={classes.avatar} alt={classes.name} />
                <div>
                    <strong>{classes.name}</strong>
                    <span>{classes.subject}</span>
                </div>
            </header>
            <p className="description">{classes.bio}</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>
                        R$
                        {` ${classes.cost} `}
                    </strong>
                </p>
                <a
                    onClick={createNewConnectcion}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${classes.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </Container>
    );
};

export default TeacherItem;
