import React, { useState } from 'react';
import { View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import AssyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Classes } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([]);
    function loadFavorites() {
        AssyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoriteTeachers = JSON.parse(response);
                setFavorites(favoriteTeachers);
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, []),
    );
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
                {favorites.map((teacher: Classes) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            classes={teacher}
                            favorited
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Favorites;
