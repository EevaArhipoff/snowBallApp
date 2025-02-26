import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    buttonColor?: string;
    textColor?: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    buttonColor = '#3498db',
    textColor = '#ffffff',
    width = 200,
    height = 50,
    borderRadius = 25,
    fontSize = 18,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor, width, height, borderRadius }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: textColor, fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
    },
});

export default CustomButton;
