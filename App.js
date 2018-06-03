import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you m automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <RadioItem key={1} checked={true} >
          "i.label"
        </RadioItem>
        <Button>antd-mobile button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
