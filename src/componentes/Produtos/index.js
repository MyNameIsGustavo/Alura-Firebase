import { View, Text } from 'react-native';
import estilos from './estilos';

export default function Produto({ nome, nota }) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Nome da matéria: {nome}</Text>
      <Text style={estilos.texto}>Média Final: {nota}</Text>
    </View>
  );
}
