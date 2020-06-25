import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content'
                backgroundColor='#7159c1' translucent={true}
            />
            <View style={style.container}>
                <Text style={style.title}>Hello World!</Text>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    }
});