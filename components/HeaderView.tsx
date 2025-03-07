import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FONTS } from '@/constants/constants';

interface HeaderProps {
    title: string;
}

const HeaderView: React.FC<HeaderProps> = ({
    title,
}) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('@/assets/images/snow.jpg')} style={styles.logo} />
            <Text style={styles.appName}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    appName: {
        position: 'absolute',
        fontSize: 40,
        fontFamily: FONTS.title,
        color: '1181C',
        textAlign: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default HeaderView;
