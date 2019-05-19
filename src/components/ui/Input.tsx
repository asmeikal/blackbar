import React from 'react';
import { View, TextInput } from 'react-native';

interface InputProps {
    target: string;
}

export class Input extends React.Component<InputProps> {
    state = {
        value: '',
        guessed: false,
    };

    onChange = (value: string) => {
        this.setState({
            value,
            guessed: this.props.target === value,
        });
    };

    render() {
        const { value, guessed } = this.state;
        const { target } = this.props;
        const maxLength = target.length;

        return (
            <View
                style={{
                    backgroundColor: guessed ? 'yellow' : 'black',
                    width: maxLength * 10,
                }}
            >
                <TextInput
                    maxLength={maxLength}
                    onChangeText={this.onChange}
                    value={value}
                    editable={!guessed}
                    style={{
                        textDecorationLine: 'none',
                        color: guessed ? 'black' : 'white',
                        fontSize: 16,
                        height: 20,
                        textAlignVertical: 'bottom',
                        fontFamily: 'cutive-mono-regular',
                    }}
                />
            </View>
        );
    }
}
