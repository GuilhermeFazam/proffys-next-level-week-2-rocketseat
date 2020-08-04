import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backImg from '../../assets/images/icons/back.svg';
import { Container } from './styles';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    return (
        <Container className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backImg} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
        </Container>
    );
};

export default PageHeader;
