import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Container } from './styles';

const TeacherForm: React.FC = () => {
    return (
        <Container id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que voce quer dar aulas." />
        </Container>
    );
};

export default TeacherForm;
