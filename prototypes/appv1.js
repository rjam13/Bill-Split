

import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ========== PERCENTAGE, ITEM-BASED, OR ONE OPTION QUESTION VIEW ==========
function SplitOptions({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How would you like to split the bill?</Text>
      <Button
        title="Even across members"
        onPress={() => navigation.navigate('evenOption')}
      />
      <Button
        title="pay for what you eat"
        onPress={() => navigation.navigate('itemBased')}
      />
      <Button
        title="Pay for all!"
        onPress={() => navigation.navigate('receiptView')}
      />
    </View>
  );
}

// ========== EVEN OPTION VIEW ==========
function EvenOption({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How many are in your party?</Text>
      <Button
        title="Calculate amount"
        onPress={() => navigation.navigate('receiptView')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ========== ITEM-BASED QUESTION VIEW ==========
function ItemBased({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Which item(s) are yours pick?</Text>
      <Button
        title="Calculate amount"
        onPress={() => navigation.navigate('receiptView')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// ========== SHOW RECEIPT VIEW ==========
function ReceiptView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splitOptions" component={SplitOptions} />
      <Stack.Screen name="itemBased" component={ItemBased} />
      <Stack.Screen name="evenOption" component={EvenOption} />
      <Stack.Screen name="receiptView" component={ReceiptView} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
