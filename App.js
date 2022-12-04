import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, TouchableNativeFeedback } from 'react-native'

export default function App() {
  console.log("Hola mundo")
  return (
    <View style={styles.container}>
      {/* El view funciona como flexbox */}
      {/* Para que algo sea tocable, se tiene que importar un touchable de algo */}

      <TouchableNativeFeedback onPress={() => Alert.alert("Hemos tocado un texto!")}>
        <Text>Hola Mundo</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
