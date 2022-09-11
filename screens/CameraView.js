import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { RectButton } from '../components';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const CameraView = ({ navigation }) => {
    const [hasPermission, setHasPermission] = React.useState(false);
    const [scanData, setScanData] = React.useState();
    
    // used to see if the user has permission to barcode scanner
    useEffect(() => {
        (async() => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
        })();
    }, [])
    
    if(!hasPermission) {
        return (
        <View style={styles.container}>
            <Text>Please grant camera permission to app.</Text>
        </View>
        );
    }
    
    const handleBarCodeScanned = ({type, data}) => {
        setScanData(data);
        console.log(`Data: ${data}`);
        console.log(`Type: ${type}`);
    }

    function checkout(buttonID) {
        navigation.navigate('SplitOptions')
    }
    
    return (
    <View style={styles.container}>
        <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        // stops continuous reading of data
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
        {/* adds a scan again button if there is something already scanned */}
        {scanData ? <Button title='Checkout' onPress={() => checkout(this.buttonID)} /> : null}
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        <StatusBar style="auto" />
    </View>
    );
}

export default CameraView