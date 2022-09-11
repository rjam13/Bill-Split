// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import React, { useEffect, useState } from 'react';

// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import { BarCodeScanner } from 'expo-barcode-scanner';
// import * as Linking from 'expo-linking';

// const prefix = Linking.createURL('/');

// // ========== QR CODE SCANNER ==========
// function ScannerScreen({ navigation }) {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [scanData, setScanData] = useState();

//   // used to see if the user has permission to barcode scanner
//   useEffect(() => {
//     (async() => {
//       const {status} = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, [])

//   if(!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text>Please grant camera permission to app.</Text>
//       </View>
//     );
//   }

//   const handleBarCodeScanned = ({type, data}) => {
//     setScanData(data);
//     console.log(`Data: ${data}`);
//     console.log(`Type: ${type}`);
//   }

//     return (
//       <View style={styles.container}>
//         <BarCodeScanner
//           style={StyleSheet.absoluteFillObject}
//           // stops continuous reading of data
//           onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
//           />
//           {/* adds a scan again button if there is something already scanned */}
//         {scanData ? <Button title='Scan Again?' onPress={() => setScanData(undefined)} /> : null}
//         {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
//         <StatusBar style="auto" />
//       </View>
//     );
// }

// // ========== PERCENTAGE, ITEM-BASED, OR ONE OPTION QUESTION VIEW ==========
// function SplitOptions({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How would you like to split the bill?</Text>
//       <Button
//         title="Even across members"
//         onPress={() => navigation.navigate('evenOption')}
//       />
//       <Button
//         title="pay for what you eat"
//         onPress={() => navigation.navigate('itemBased')}
//       />
//       <Button
//         title="Pay for all!"
//         onPress={() => navigation.navigate('receipt')}
//       />
//     </View>
//   );
// }

// // ========== PERCENTAGE QUESTION VIEW ==========
// function evenOption({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>How many are in your party?</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Calculate subtotal"
//         onPress={() => navigation.navigate('receipt')}
//       />
//     </View>
//   );
// }

// // ========== ITEM-BASED QUESTION VIEW ==========
// function itemBased({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Which item(s) are yours pick?</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Calculate subtotal"
//         onPress={() => navigation.navigate('receipt')}
//       />
//     </View>
//   );
// }

// // ========== SHOW RECEIPT VIEW ==========
// function receipt({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Receipt</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Text>Total:</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {

//   // const [data, setData] = useState(null);

//   // function handleDeepLink(event){
//   //   let data = Linking.parse(event.url);
//   //   setData(data);
//   // }

//   // useEffect(()=>{
//   //   eventlistener = Linking.addEventListener("url", handleDeepLink);
//   //   return () => {
//   //     eventlistener.remove(); 
//   //   };
//   // }, []);

//   // const linking = {
//   //   prefixes: [prefix],
//   //   config: {
//   //     screens: {
//   //       Home: "home",
//   //       Scanner: "scanner",
//   //     },
//   //   },
//   // };

//   return (
//     // <NavigationContainer linking={linking} initialState={HomeScreen}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="splitOptions" component={SplitOptions} />
//         <Stack.Screen name="evenOption" component={evenOption} />
//         <Stack.Screen name="itemBased" component={itemBased} />
//         <Stack.Screen name="receipt" component={receipt} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });