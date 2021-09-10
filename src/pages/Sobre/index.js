import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Sobre</Text>
      </View>
    );
 }

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1CAB08',
justifyContent: 'center',
alignItems:'center',
},
texto: {
fontSize: 18,
fontWeight: 'bold',
},
});
