import React from 'react';
import { Text } from './Text';
import { Line } from './Line';

interface LineTextProps {
    children: React.ReactNode | React.ReactNode[];
}

export const LineText = ({ children }: LineTextProps) => <Line><Text>{children}</Text></Line>;