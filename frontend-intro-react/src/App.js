import React, { useState } from 'react';

import './App.css';

import imageBackground from './assets/background.png';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['teste 1', 'teste 2']);

    function handleAppProjects() {
        setProjects([...projects, `teste ${projects.length + 1}`]);
    }

    return (
        <>
            <Header title="Menu" />

            <img width={300} src={imageBackground} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAppProjects}>Adicionar</button>
        </>
    );
}

export default App;