import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Classes } from '../../components/TeacherItem';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';

import { Container } from './styles';

import api from '../../services/api';

const TeacherList: React.FC = () => {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeacher(e: FormEvent): Promise<void> {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });

        setTeachers(response.data);

        console.log(response.data);
    }

    return (
        <Container id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teacher" onSubmit={searchTeacher}>
                    <Select
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={e => {
                            setSubject(e.target.value);
                        }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Fisica', label: 'Fisica' },
                        ]}
                    />
                    <Select
                        label="Dia da semana"
                        name="week_day"
                        value={week_day}
                        onChange={e => {
                            setWeekDay(e.target.value);
                        }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Qinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                        value={time}
                        onChange={e => {
                            setTime(e.target.value);
                        }}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Classes) => {
                    return <TeacherItem key={teacher.id} classes={teacher} />;
                })}
            </main>
        </Container>
    );
};

export default TeacherList;
