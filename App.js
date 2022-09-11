import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

// ========== Screens ==========
import CameraView from "./screens/CameraView";
import EvenOption from "./screens/EvenOption";
import ItemBased from "./screens/ItemBased";
import ReceiptView from "./screens/ReceiptView";
import SplitOptions from "./screens/SplitOptions";

// // ========== SHOW RECEIPT VIEW ==========
// function ReceiptView({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
    });

    if (!loaded) return null;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="CameraView"
            >
                <Stack.Screen name="CameraView" component={CameraView} />
                <Stack.Screen name="SplitOptions" component={SplitOptions} />
                <Stack.Screen name="ItemBased" component={ItemBased} />
                <Stack.Screen name="EvenOption" component={EvenOption} />
                <Stack.Screen name="ReceiptView" component={ReceiptView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
