import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

interface TextProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Text = ({ children }: TextProps) => {
    return (
    <RNText style={styles.text}>
        {children}
    </RNText>
    );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'cutive-mono-regular',
    fontSize: 16,
    lineHeight: 22,
  },
});

