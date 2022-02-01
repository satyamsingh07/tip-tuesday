## Tip Tuesday

#### How to implement SafeAreaView for Android

- The purpose of SafeAreaView is to render content within the safe area boundaries of a device.
- It is currently only applicable to iOS devices with iOS version 11 or later.
- How do we ensure a similar setup for Android devices?
- Well for one we could add a bit of styling in our SafeAreaView component

- Now, add this simple piece of code inside the container:

```
paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
```

- This code checks the operating system of the device and if it’s Android, it adjusts the top padding according to the dimensions Of the device
- In the final code, make sure to import Platform and StatusBar.

#### Property

- SafeAreaView

#### Resources( To Learn More about SafeAreaView)

- https://www.google.com/amp/s/aboutreact.com/react-native-safeareaview/amp/
- https://reactnative.dev/docs/safeareaview

![image](https://user-images.githubusercontent.com/81974869/151993509-bf0762ac-c85c-4786-ba3b-221fe6ec998a.png)

![image](https://user-images.githubusercontent.com/81974869/151993692-caefb1c8-d765-4f34-ba84-409812c7fde7.png)

![image](https://user-images.githubusercontent.com/81974869/151993887-5cc0589d-4a65-4ee2-b66b-d4f8f79f6fc5.png)
