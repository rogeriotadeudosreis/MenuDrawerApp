import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Home</Text>
      </View>
    );
 }

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#2495D1',
justifyContent: 'center',
alignItems:'center',
},
texto: {
fontSize: 18,
fontWeight: 'bold',
},
});
