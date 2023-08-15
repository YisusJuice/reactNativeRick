import React from 'react';
import { Text, View } from 'react-native';
import { textStyle } from '../style/textStyle';
import { Image } from 'react-native';
import { imageStyle } from '../style/imageStyle';
import { viewStyle } from '../style/viewStyle';


export function CharacterListItem  ({item}) { 

    let dotStyle;  //style status dot
    switch (item.status) {
        case 'Alive':
            dotStyle= viewStyle.dotAlive;
            break;
        case 'Dead':
            dotStyle= viewStyle.dotDead;
            break;
        case 'unknown':
            dotStyle= viewStyle.dotUnknown;
            break;
    }

    return(
    <View style={ viewStyle.characterContainer }>
        <View style={ viewStyle.characterImageContainer }>
            <Image style={imageStyle.image} source={{ uri: item.image }}/>
        </View>
        <Text style= { textStyle.characterName}>{item.name}</Text>
        <Text style= { textStyle.characterSpecie}>{item.species}</Text>
        <View style={ viewStyle.statusContainer }>
            <Text style= { textStyle.status }>{item.status}</Text>
            <View style= { [viewStyle.dot, dotStyle]}/>
        </View>
    </View>)
}