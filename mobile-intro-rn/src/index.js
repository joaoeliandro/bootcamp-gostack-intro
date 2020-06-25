import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            console.log(response.data);
            setRepositories(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle='light-content'
                backgroundColor='#7159c1' translucent={true}
            />
            <SafeAreaView style={style.container}>
                <FlatList
                    data={repositories}
                    keyExtractor={repository => repository.id}
                    renderItem={({ item: repository }) => (
                        <Text style={style.title}>{repository.title}</Text>
                    )}
                />
            </SafeAreaView>
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
        fontSize: 30,
    }
});