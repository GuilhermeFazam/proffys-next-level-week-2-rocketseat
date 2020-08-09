import React from 'react';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TheacherItem from '../../components/TheacherItem';

const Favorites: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
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

export default Favorites;
