import React from 'react';
import { View } from 'react-native';

interface LineProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Line = ({children}: LineProps) => (
    <View
        style={{
            display: 'flex',
            flexDirection: 'row',
        }}
    >
        {children}
    </View>
);