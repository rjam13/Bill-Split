import React from 'react'
import { View, Text, Button } from 'react-native'

const ItemBased = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Which item(s) are yours pick?</Text>
      <Button
        title="Calculate amount"
        onPress={() => navigation.navigate('ReceiptView')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ItemBased
