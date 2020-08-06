import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

import { Container } from './styles';

const TeacherList: React.FC = () => {
    return (
        <Container id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teacher">
                    <Select
                        label="Matéria"
                        name="subject"
                        options={[
                            { id: 1, value: 'Artes', label: 'Artes' },
                            { id: 2, value: 'Matemática', label: 'Matemática' },
                            { id: 3, value: 'Geografia', label: 'Geografia' },
                            { id: 4, value: 'Fisica', label: 'Fisica' },
                        ]}
                    />
                    <Select
                        label="Dia da semana"
                        name="week_day"
                        options={[
                            { id: 0, value: '0', label: 'Domingo' },
                            { id: 1, value: '1', label: 'Segunda-feira' },
                            { id: 2, value: '2', label: 'Terça-feira' },
                            { id: 3, value: '3', label: 'Quarta-feira' },
                            { id: 4, value: '4', label: 'Qinta-feira' },
                            { id: 5, value: '5', label: 'Sexta-feira' },
                            { id: 6, value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input label="Hora" name="time" type="time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </Container>
    );
};

export default TeacherList;
