import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoritIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TheacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://github.com/GuilhermeFazam.png',
                    }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>NOME</Text>
                    <Text style={styles.subject}>Materia</Text>
                </View>
                <Text style={styles.bio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo similique, repellat sed nam saepe itaque, excepturi
                    quasi iusto, nobis sapiente voluptas! Praesentium excepturi
                    possimus accusantium eius vitae sed, ipsum laudantium?
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>
                        {`Preço/Hora   `}
                        <Text style={styles.priceValue}>R$ 120,00</Text>
                    </Text>
                    <View style={styles.buttonContainer}>
                        <RectButton style={styles.favoriteButton}>
                            <Image source={heartOutLineIcon} />
                        </RectButton>
                        <RectButton style={styles.contactButton}>
                            <Image source={whatsAppIcon} />
                            <Text style={styles.contactButtonText}>
                                Entrar em contato
                            </Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TheacherItem;
