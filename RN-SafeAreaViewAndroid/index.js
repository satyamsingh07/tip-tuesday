import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native';

const SafeAreaAndroid = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Safe Area Works!!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
});

export default SafeAreaAndroid;