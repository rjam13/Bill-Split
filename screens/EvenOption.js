import React from 'react'
import { View, Text, Button } from 'react-native'

const EvenOption = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How many are in your party?</Text>
      <Button
        title="Calculate amount"
        onPress={() => navigation.navigate('ReceiptView')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default EvenOption