import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import imageBackground from './assets/background.png';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            setProjects(response.data);
        })
    }, []);

    function handleAppProjects() {
        // setProjects([...projects, `teste ${projects.length + 1}`]);
    }

    return (
        <>
            <Header title="Menu" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAppProjects}>Adicionar</button>
        </>
    );
}

export default App;