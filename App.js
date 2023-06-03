import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [conselho, setConselho] = useState('');

  const gerarConselho = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice?timestamp=' + Date.now());
      const data = await response.json();
      setConselho(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Gerador de conselhos</Text>
        <Text>Somente em inglês!!</Text>
      </View>

      <View style={styles.conselhoContainer}>
        <Text style={styles.conselho}>{conselho}</Text>
        {/* usei isso ao invés da tag Button pra poder estilizar o botao */}
        <TouchableOpacity style={styles.botaoGerar} title="Gerar conselho" onPress={gerarConselho}>
          <Text style={styles.textoBotaoGerar}>Gerar Conselho</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: -300
  },
  titulo: {
    fontSize: 34,
    justifyContent: 'flex-start',
  },
  conselhoContainer: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    //marginBottom: 300
  },

  conselho: {
    fontSize: 24,
    padding: 30,
    marginBottom: 85,
  },
  botaoGerar: {
    position: 'absolute',
    top: 0,
    marginTop: 250,
    width: 200,
    padding: 25,
    backgroundColor: '#24a0ed',
    borderRadius: 5,
    alignSelf: 'center'
  },
  textoBotaoGerar: {
    color: '#ffff',
    fontSize: 22,
    textAlign: 'center'
  },
});
