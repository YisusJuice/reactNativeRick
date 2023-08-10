import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { viewStyle } from '../style/viewStyle';
import { FlatList } from 'react-native';
import { CharacterListItem } from '../components/CharacterListItem';
import { titleStyle } from '../style/titleStyle';
import { titleContainerStyle } from '../style/titleContainerStyle';

const URL = 'https://rickandmortyapi.com/api/character';

export function CharactersScreen(){

    const [data, setData] = useState([]);

    try {
        useEffect(() => {
            fetch(URL, {method: 'GET'})
            .then(response => response.json())
            .then(json => { setData(json.results) })
        },[])
    }
    catch(err){
        console.log(err);
    }
    console.log(data);

    return(
        <View style={ viewStyle.container }>
            <View style={ titleContainerStyle.container }>
                <Text style={ titleStyle.container }>Rick & Morty</Text>
                <Text style={ titleStyle.container }>API test</Text>
            </View>
            <FlatList
                numColumns= '2'
                data={data}                                                                                         //variable a iterar
                renderItem={({item}) => <CharacterListItem item = {item}/>}                                         //le paso el item a CharacterListItem por su prop
            />
        </View>
    );
}