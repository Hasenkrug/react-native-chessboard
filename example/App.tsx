import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Chessboard, { ChessboardRef } from 'react-native-chessboard';

export default function App() {
  const ref = useRef<ChessboardRef>(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Chessboard
        ref={ref}
        onMove={(move) => {
          console.log({ move });
        }}
      />
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
