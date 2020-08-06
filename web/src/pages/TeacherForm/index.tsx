import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Select from '../../components/Form/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';

const TeacherForm: React.FC = () => {
    return (
        <Container id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que voce quer dar aulas."
                description="O primeor passo é preencher esse formualario de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input label="Nome Completo" name="name" type="text" />
                    <Input label="Avatar" name="avatar" type="text" />
                    <Input label="Whatsapp" name="whatsapp" type="text" />
                    <Textarea label="Biografia" name="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
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
                    <Input
                        label="Custo da sua hora por aula"
                        name="cost"
                        type="text"
                    />
                </fieldset>
                <fieldset>
                    <legend>
                        Horários disponiveis
                        <button type="button">+ Novo horário</button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            label="Dia da semana"
                            name="subject"
                            options={[
                                { id: 1, value: 'Artes', label: 'Artes' },
                                {
                                    id: 2,
                                    value: 'Matemática',
                                    label: 'Matemática',
                                },
                                {
                                    id: 3,
                                    value: 'Geografia',
                                    label: 'Geografia',
                                },
                                { id: 4, value: 'Fisica', label: 'Fisica' },
                            ]}
                        />
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante!
                        <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </Container>
    );
};

export default TeacherForm;
