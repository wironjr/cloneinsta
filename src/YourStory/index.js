import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default function YourStory(){
    const [yourStory, setYourStory] = useState([
      {
        id: '1',
        nome: 'Wiron',
        imgperfil: require('../img/perfil.jpg'),
      }
    ])

    return(     
			<View style={styles.viewScroll}>
				<View style={{flex:1,flexDirection:'column'}}>
					<TouchableOpacity
						onPress={ () => alert('Seus storys')}
>
						<Image
										source={yourStory[0].imgperfil}
										style={[styles.imgStories, {marginLeft:0}]}
						/>
						<Text style={{fontSize:10, textAlign:'center'}}>Seu Story</Text>
					</TouchableOpacity>
				</View>
			</View>
                 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  imgStories:{
    width:60,
    height:60,
    borderRadius: 30,
  },
  viewScroll:{
    padding:7
  }

});