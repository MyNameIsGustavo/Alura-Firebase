import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth } from '../../config/firebase';

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  function deslogar(){
    auth.signOut();
    navigation.replace('Login');
  }

  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <Produto nome="Engenharia 3" nota="8.00" />
      <Produto nome="Estrutura de dados" nota="5.50" />
      <Produto nome="Banco de dados" nota="7.00" />
      <Produto nome="Sistemas Operacionais" nota="6.00" />
      <Produto nome="POO - Java" nota="7.00" />
     </View>
  );
}
