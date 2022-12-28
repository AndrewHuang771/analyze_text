import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import TextApp from './pages/TextApp';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<TextApp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

var root = createRoot(document.getElementById('app'));
root.render(<App />)
