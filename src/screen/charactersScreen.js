import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { viewStyle } from '../style/viewStyle';
import { FlatList } from 'react-native';
import { CharacterListItem } from '../components/CharacterListItem';
import { textStyle } from '../style/textStyle';

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
    console.log(data); // eliminar linea despues de checkear pls;

    return(
        <View style={ viewStyle.container }>
            <FlatList
                ListHeaderComponent={
                    <View style={ viewStyle.titleContainer }>
                        <Text style={ textStyle.title }>Rick & Morty</Text>
                        <Text style={ textStyle.title }>API test</Text>
                    </View>
                }
                numColumns= '2'
                data={data}                                                                                         //variable a iterar
                renderItem={({item}) => <CharacterListItem item = {item}/>}                                         //le paso el item a CharacterListItem por su prop
            />
        </View>
    );
}