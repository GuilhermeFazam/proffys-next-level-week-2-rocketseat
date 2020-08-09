import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import TheacherItem from '../../components/TheacherItem';

const TeacherList: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponiveis" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TheacherItem />
                <TheacherItem />
                <TheacherItem />
                <TheacherItem />
                <TheacherItem />
                <TheacherItem />
                <TheacherItem />
            </ScrollView>
        </View>
    );
};

export default TeacherList;
