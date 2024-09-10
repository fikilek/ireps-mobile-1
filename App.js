import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World iREPS 1</Text>
      <Text>Hello World iREPS 2</Text>
      <Text>Hello World iREPS 3</Text>
      <StatusBar style="auto" />
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
});
