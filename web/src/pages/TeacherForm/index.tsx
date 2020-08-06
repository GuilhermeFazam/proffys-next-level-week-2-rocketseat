import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Select from '../../components/Form/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        {
            week_day: 0,
            from: '',
            to: '',
        },
    ]);

    function addNewScheduleItem(): void {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: '',
            },
        ]);
    }

    function setScheduleItemsValue(
        position: Number,
        field: string,
        value: string,
    ): void {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });

        setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass(e: FormEvent): void {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            shedule: scheduleItems,
        })
            .then(() => {
                console.log('Cadastro realizado com sucesso!');
            })
            .catch(() => {
                console.log('Erro no cadastro!');
            });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems,
        });
    }

    return (
        <Container id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que voce quer dar aulas."
                description="O primeor passo é preencher esse formualario de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            label="Nome Completo"
                            name="name"
                            type="text"
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                        />
                        <Input
                            label="Avatar"
                            name="avatar"
                            type="text"
                            value={avatar}
                            onChange={e => {
                                setAvatar(e.target.value);
                            }}
                        />
                        <Input
                            label="Whatsapp"
                            name="whatsapp"
                            type="text"
                            value={whatsapp}
                            onChange={e => {
                                setWhatsapp(e.target.value);
                            }}
                        />
                        <Textarea
                            label="Biografia"
                            name="bio"
                            value={bio}
                            onChange={e => {
                                setBio(e.target.value);
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            label="Matéria"
                            name="subject"
                            value={subject}
                            onChange={e => {
                                setSubject(e.target.value);
                            }}
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
                        <Input
                            label="Custo da sua hora por aula"
                            name="cost"
                            type="text"
                            value={cost}
                            onChange={e => {
                                setCost(e.target.value);
                            }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponiveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div
                                    key={scheduleItem.week_day}
                                    className="schedule-item"
                                >
                                    <Select
                                        label="Dia da semana"
                                        name="subject"
                                        value={scheduleItem.week_day}
                                        onChange={e =>
                                            setScheduleItemsValue(
                                                index,
                                                'week_day',
                                                e.target.value,
                                            )
                                        }
                                        options={[
                                            {
                                                id: 0,
                                                value: '0',
                                                label: 'Domingo',
                                            },
                                            {
                                                id: 1,
                                                value: '1',
                                                label: 'Segunda-feira',
                                            },
                                            {
                                                id: 2,
                                                value: '2',
                                                label: 'Terça-feira',
                                            },
                                            {
                                                id: 3,
                                                value: '3',
                                                label: 'Quarta-feira',
                                            },
                                            {
                                                id: 4,
                                                value: '4',
                                                label: 'Quinta-feira',
                                            },
                                            {
                                                id: 5,
                                                value: '5',
                                                label: 'Sexta-feira',
                                            },
                                            {
                                                id: 6,
                                                value: '6',
                                                label: 'Sábado',
                                            },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e =>
                                            setScheduleItemsValue(
                                                index,
                                                'from',
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e =>
                                            setScheduleItemsValue(
                                                index,
                                                'to',
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante!
                            <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </Container>
    );
};

export default TeacherForm;
