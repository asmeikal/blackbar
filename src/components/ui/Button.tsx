import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

interface ButtonProps {
    text: string;
}

export const Button = ({ text }: ButtonProps) => (
    <TouchableHighlight
        onPress={() => { }}
        underlayColor="#444"
        style={{
            alignItems: 'center',
            padding: 6,
            backgroundColor: 'black',
        }}
    >
        <Text
            style={{
                color: 'white',
                fontFamily: 'cutive-mono-regular',
                fontSize: 13,
            }}
        >
            {text}
        </Text>
    </TouchableHighlight>
);
