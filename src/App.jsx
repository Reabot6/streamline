/**
 * Built by Reabot6 from SFG (seofg.xyz)
 * Open-source — github.com/reabot6/streamline
 */
import React, { useState, useEffect } from 'react';
import ItemBoard from './components/ItemBoard';
import './styles/global.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [meta, setMeta]       = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMeta({ title: 'Streamline', subtitle: 'Real-time event item manager' });
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="app app--loading">
                <div className="spinner" role="status" aria-label="Loading" />
                <p>Loading Streamline...</p>
            </div>
        );
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>{meta.title}</h1>
                <p>{meta.subtitle}</p>
            </header>
            <main>
                <ItemBoard />
            </main>
        </div>
    );
}

export default App;
