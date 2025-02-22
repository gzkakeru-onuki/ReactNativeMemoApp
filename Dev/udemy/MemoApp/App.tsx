import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Hello from './src/components/Hello';
const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <Hello style={{ color: "white" }} bang={true} children="Hello" name="John" age={20}></Hello>
      <Hello bang={false} children="Hello" name="John" age={20}></Hello>
      <Image source={{ uri: 'https://static.takeda.tv/uploads/2021/04/K98DNKe8bAqoWJarkEAHTu0LWVzPPzcNFgZo9ZTM.png' }} style={{ width: 150, height: 150 }} />
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

export default App
