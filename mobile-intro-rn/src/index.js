import React, { useEffect, useState } from 'react';
import {
    View, SafeAreaView, FlatList, Text,
    StyleSheet, StatusBar, TouchableOpacity
} from 'react-native';

import api from './services/api';

export default function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            setRepositories(response.data);
        });
    }, []);

    async function handleAddRepository() {
        const response = await api.post('repositories', {
            title: 'Game-endless-runner',
            url: 'https://github.com/joaoeliandro/game-endless-runner',
            techs: ['p5', 'Canvas', 'Node.js']
        });

        const newRepository = response.data;

        setRepositories([...repositories, newRepository]);
    }

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

                <TouchableOpacity activeOpacity={0.6}
                    style={style.button} onPress={handleAddRepository}>
                    <Text style={style.textButton}>Add repository</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        paddingTop: 20
    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontWeight: "bold",
        fontSize: 16,
    }
});