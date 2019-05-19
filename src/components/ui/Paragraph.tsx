import React from 'react';
import { View } from 'react-native';

interface ParagraphProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Paragraph = ({ children }: ParagraphProps) => (
    <View
        style={{
            marginBottom: 20,
        }}
    >
        {children}
    </View>
);