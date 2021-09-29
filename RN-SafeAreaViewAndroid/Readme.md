SafeAreaView for Android -
The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. How do we ensure a similar setup for Android devices? Well for one we could add a bit of styling in our SafeAreaView component:-

import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const App = () => {
return (
<SafeAreaView style={styles.container}>
<Text>Page content</Text>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
});

export default App;

Now, add this simple piece of code inside the container-

paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

This code checks the operating system of the device and if it’s Android, it adjusts the top padding according to the dimensions Of the Android Device.

The final code- (make sure to import Platform and StatusBar)-

import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const App = () => {
return (
<SafeAreaView style={styles.container}>
<Text>Page content</Text>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

},
});

export default App;
