import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    buttonColor?: { light: string, dark: string };
    borderColor?: { light: string, dark: string };
    textColor?: { light: string, dark: string };
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    buttonColor = { light: Colors.light.button, dark: Colors.dark.button },
    borderColor = { light: Colors.blue.navyBlue, dark: Colors.blue.lightBlue },
    textColor = { light: '#F8F8FF', dark: '#000003' },
    width = 200,
    height = 50,
    borderRadius = 25,
    fontSize = 18,
}) => {
    const colorScheme = useColorScheme();
    const backgroundColor = buttonColor[colorScheme || 'light'];
    const border = borderColor[colorScheme || 'light'];
    const text = textColor[colorScheme || 'light'];
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor, borderColor: border, width, height, borderRadius }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: text, fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 3,
    },
    text: {
        fontWeight: 'bold',
    },
});

export default CustomButton;
