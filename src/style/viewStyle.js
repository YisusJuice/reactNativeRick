import { StyleSheet } from "react-native";

export const viewStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1f2531',
        paddingHorizontal: '8%' 
    },
    dot:{
        marginRight: 10,
        alignSelf: 'center',
        backgroundColor: 'red',
        height: 13,
        width: 13,
        borderRadius: 50,
    },
    dotAlive:{
        backgroundColor: 'green',
    },
    dotUnknown:{
        backgroundColor: 'grey',
    },
    dotDead:{
        backgroundColor: 'red',
    },
    statusContainer:{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        paddingBottom: 5,
    },
    characterContainer:{
        flex: 1,
        margin: 7.5,
        height: 220,
        backgroundColor: '#434b5b',
        borderRadius: 20,
        elevation: 3,
        shadowColor:'black',
    },
    characterImageContainer:{
        alignItems: 'center',
        margin:10,
    },
    titleContainer:{
        marginTop: 20,
        marginBottom: 40,
    }
});