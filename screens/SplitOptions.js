import React from 'react'
import { View, Button, Text } from 'react-native'

const SplitOptions = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How would you like to split the bill?</Text>
      <Button
        title="Even across members"
        onPress={() => navigation.navigate('EvenOption')}
      />
      <Button
        title="Pay for what you eat"
        onPress={() => navigation.navigate('ItemBased')}
      />
      <Button
        title="Pay for all!"
        onPress={() => navigation.navigate('ReceiptView')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SplitOptions