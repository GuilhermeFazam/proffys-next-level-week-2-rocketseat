import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import purpleHeart from '../../assets/images/icons/heart.png';

import styles from './styles';

const Landing: React.FC = () => {
    const { navigate } = useNavigation();
    const [totalConections, setTotalConections] = useState('0');

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConections(total);
        });
    }, []);

    function handleNavigateToGiveClassesPages() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                {`Seja bem-vindo,\n`}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonsText}>Estudar</Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPages}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonsText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                {`Total de ${totalConections} conexões já realizas `}
                <Image source={purpleHeart} />
            </Text>
        </View>
    );
};

export default Landing;
