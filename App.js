import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button,  Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView >
      <View style={styles.comp}>
      <Text style={styles.text}>Username</Text>
      <TextInput
      placeholder='Enter Username'
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
<Button
        title="Log In"
        onPress={() => Alert.alert('Logged In')}
      />
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    margin:12
  },
  comp: {
  paddingTop: 200
  }

});
