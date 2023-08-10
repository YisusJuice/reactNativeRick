import React from 'react';
import { Text, View } from 'react-native';
import { characterContainerStyle } from '../style/characterContainerStyle';
import { textStyle } from '../style/textStyle';
import { Image } from 'react-native';
import { characterImageStyle } from '../style/characterImageStyle';

export const CharacterListItem = ({item}) => (
    <View style={ characterContainerStyle.container }>
        <View style={ characterImageStyle.container }>
            <Image style={characterImageStyle.image} source={{ uri: item.image }}/>
        </View>
        
        <Text style= { textStyle.container }>{item.name}</Text>
    </View>
)