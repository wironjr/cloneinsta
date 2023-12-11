import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import Header from './src/Header'
import List from './src/List'
import ListStory from "./src/ListStory";
import YourStory from "./src/YourStory";

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png', 
      likeada: false,
      likers: 1,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    },
    {
      id: '6',
      nome: 'Maria',
      descricao: 'Vamos que vamos',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 32,
    }
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={feed}
        ListHeaderComponent={() => (
          <FlatList
            data={feed}
            renderItem={({ item }) => 
            <>
            {item.id == 1 ? <YourStory/> : ''}
            <ListStory data={item} />
            </>}

            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
        renderItem={({ item }) => <> 
          
          <List data={item} />
          </> 
        }
        
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },

});


