import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'


export default function List(props){
	const [like, setLike] = useState(false);
	const [likers, setLikers] = useState(props.data.likers);
	const [heart, setHeart] = useState(require('../img/like.png'))

	function clickLike(likee){
		if(like == true){
			setLike(false)
			setHeart(require('../img/like.png'))
			setLikers( likers - 1)
		}else if(likee == false){
			setLike(true)
			setHeart(require('../img/likeada.png'))
			setLikers( likers + 1)
		}
	}

	function carregaIcone(likeada){
		return likeada ? require('../img/likeada.png') : require('../img/like.png')
	}

function mostrarLike(likers){
	if(likers === 0){
		return;
	}

	return(
		<Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
	)
}

	return(
		<View>
			<View style={styles.viewPerfil}>
				<Image
						source={{uri: props.data.imgperfil}}
						style={styles.fotoPerfil}
				/>
				<Text style={styles.nomeUsuario}>{props.data.nome}</Text>
			</View>

			<Image
				resizeMode="cover"
				source={{uri: props.data.imgPublicacao}}
				style={styles.fotoPublicacao}
			/>

			<View style={styles.areaBtn}>
				<TouchableOpacity
					onPress={() => clickLike(props.data.likeada)}
				>
					<Image
						// source={carregaIcone(props.data.likeada)}
						source={props.data.likeada ? require('../img/likeada.png') : heart}
						style={styles.iconeLike}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btnSend}
          onPress={()=> alert('Clicou nos comentários do(a) ' + props.data.nome)}
        >
					<Image
						// source={carregaIcone(props.data.likeada)}
						source={require('../img/comment.png')}
						style={styles.iconeLike}
					/>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.btnSend}
           onPress={()=> alert('Clicou no direct do(a) ' + props.data.nome)}
        >
					<Image
						// source={carregaIcone(props.data.likeada)}
						source={require('../img/send.png')}
						style={styles.iconeLike}
					/>
				</TouchableOpacity>
			</View>

			{mostrarLike(likers)}

			<Text style={styles.nomeRodape}>
				{props.data.nome}
			</Text>

			<Text style={styles.descRodape}>
				{props.data.descricao}
			</Text>

		</View>
	)
}

const styles = StyleSheet.create({
	viewPerfil:{
		flexDirection:'row',
		flex:1,
		alignItems:'center',
		padding:8
	}, 
	fotoPerfil:{
		width:50,
		height:50,
		borderRadius:25
	},
	nomeUsuario:{
		paddingLeft:5,
		fontSize:22,
		color: '#000'
	},
	fotoPublicacao:{
		height:400,
		alignItems:'center'
	}, areaBtn:{
		flexDirection:'row',
		padding:5
	},
	iconeLike:{
		width:25,
		height:25
	},
	btnSend:{
		paddingLeft:15
	},
	likes:{
		fontWeight:'bold',
		marginLeft: 7
	},
	nomeRodape:{
		fontSize:15,
		fontWeight:'bold',
		paddingLeft:7
	},
	descRodape:{
		paddingLeft:7,
		paddingBottom: 20,
		fontSize:12
	}
})