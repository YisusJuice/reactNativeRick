import React from 'react';
import { Text, View } from 'react-native';
import { viewStyles } from '../style/viewStyle';

export function CharactersScreen(){
    return(
        <View style={ viewStyles.container }>
            <Text>Characters</Text>
        </View>
    );
}