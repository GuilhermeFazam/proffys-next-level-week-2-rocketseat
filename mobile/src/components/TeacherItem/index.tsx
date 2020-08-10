import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AssyncStorage from '@react-native-community/async-storage';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoritIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Classes {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    subject: string;
    cost: number;
    bio: string;
}

interface TeacherItemProps {
    classes: Classes;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes, favorited }) => {
    const [isfavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsApp() {
        api.post('connections', { user_id: classes.id });
        Linking.openURL(`whatsapp://send?phone=${classes.whatsapp}`);
    }

    async function handleToggleFavorite() {
        const favorites = await AssyncStorage.getItem('favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }
        if (isfavorited) {
            const favoriteIndex = favoritesArray.findIndex(
                (teacherItem: Classes) => {
                    return teacherItem.id === classes.id;
                },
            );
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);
        } else {
            favoritesArray.push(classes);
            setIsFavorited(true);
        }

        await AssyncStorage.setItem(
            'favorites',
            JSON.stringify(favoritesArray),
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: classes.avatar,
                    }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{classes.name}</Text>
                    <Text style={styles.subject}>{classes.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>{classes.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    {`Preço/Hora   `}
                    <Text style={styles.priceValue}>
                        {`R$ ${classes.cost}`}
                    </Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isfavorited ? styles.favorited : {},
                        ]}
                    >
                        {isfavorited ? (
                            <Image source={unFavoritIcon} />
                        ) : (
                                <Image source={heartOutLineIcon} />
                            )}
                    </RectButton>
                    <RectButton
                        onPress={handleLinkToWhatsApp}
                        style={styles.contactButton}
                    >
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
};

export default TeacherItem;
