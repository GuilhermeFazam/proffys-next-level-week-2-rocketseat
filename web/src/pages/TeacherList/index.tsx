import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Container } from './styles';

const TeacherList: React.FC = () => {
    return (
        <Container id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria:</label>
                        <input type="text" id="subject" name="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana:</label>
                        <input type="text" id="week_day" name="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora:</label>
                        <input type="text" id="time" name="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </Container>
    );
};

export default TeacherList;
