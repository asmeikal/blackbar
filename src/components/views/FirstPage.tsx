import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text } from '../ui/Text';
import { Input } from '../ui/Input';
import { Paragraph } from '../ui/Paragraph';
import { Line } from '../ui/Line';
import { Button } from '../ui/Button';
import { LineText } from '../ui/LineText';

export default class FirstPage extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView enableOnAndroid>
        <View style={styles.container}>
          <Paragraph>
            <LineText>Dear Vi,</LineText>
          </Paragraph>
          <Paragraph>
            <LineText>I finally got a spare minute</LineText>
            <LineText>to write to you like I</LineText>
            <LineText>promised I would. Phew,</LineText>
            <LineText>moving to the big city was a</LineText>
            <LineText>LOT of work. Everything went</LineText>
            <LineText>well, though--can't</LineText>
            <LineText>complain. I'll have time to</LineText>
            <LineText>write a bit more after my</LineText>
            <LineText>job training etc. is over.</LineText>
            <LineText>Oh, just so you know, all my</LineText>
            <LineText>messages have to go through</LineText>
            <LineText>the Department of</LineText>
            <LineText>Communication first, so some</LineText>
            <LineText>of my writing may be</LineText>
            <Line>
              <Input target="censored" />
              <Text>.</Text>
            </Line>
          </Paragraph>
          <Paragraph>
            <LineText>Bye now!</LineText>
          </Paragraph>
          <Paragraph>
            <LineText>Kenty</LineText>
          </Paragraph>
          <View
            style={{
              paddingTop: 22,
              display: "flex",
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'space-between',
            }}
          >
            <View style={{
              width: '33%',
            }}>
              <Button text="Previous" />
            </View>
            <View style={{
              width: '33%',
            }}>
              <Button text="Next" />
            </View>
          </View>
        </View>
</KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 22,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 130,
  },
});

