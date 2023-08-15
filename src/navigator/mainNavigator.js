import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CharactersScreen } from '../screen/charactersScreen';
import { LocationsScreen } from '../screen/locationsScreen';
import { EpisodesScreen } from '../screen/episodesScreen';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

export function MainNavigator(){
    return(
        <Tab.Navigator tabBarPosition= 'bottom' screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Characters'){
                    iconName= 'account';
                } else if (route.name === 'Locations'){
                    iconName= 'earth';
                } else if (route.name === 'Episodes'){
                    iconName= 'play';
                }
                return (<Icon name={ iconName } color={ color } size={26}/>);
            },
            tabBarStyle:{ backgroundColor: '#38445d', height: 60, elevation: 3, shadowColor: 'black'},
            tabBarIndicatorStyle:{ backgroundColor: '#0053ff', height: 6, borderRadius: 100, width: 50, marginBottom: 8, marginLeft: 47},
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#a9a9a9',
            tabBarPressColor: 'transparent',
            tabBarShowLabel: false,
            })}>

            <Tab.Screen name= 'Characters' component={CharactersScreen}/>
            <Tab.Screen name= 'Locations' component={LocationsScreen}/>
            <Tab.Screen name= 'Episodes' component={EpisodesScreen}/>

        </Tab.Navigator>
    );
}