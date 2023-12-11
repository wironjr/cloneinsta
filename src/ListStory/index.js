import React from "react";
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native'

export default function ListStory(props){
	
	return(
		<View style={styles.viewScroll}>
			<View style={{flex:1,flexDirection:'column'}}>
					<TouchableOpacity
						onPress={() => alert('Clicou no story do(a) ' + props.data.nome)}
					>
					<Image
							source={{uri:props.data.imgperfil}}
							style={[styles.imgStories, {marginLeft:0}]}
					/>
					<Text style={{fontSize:10, textAlign:'center'}}>{props.data.nome.split(' ')[0]}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	imgStories:{
		height:60,
		width:60,
		borderRadius:30,
		marginLeft:10
	},
	viewScroll:{
		flex:1,
		flexDirection:'row',
		marginBottom:15,
		alignContent:'space-around',
		marginLeft:10,
		marginTop:5
	},
}
)
