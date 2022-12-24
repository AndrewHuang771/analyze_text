import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/asdf' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

var root = createRoot(document.getElementById('app'));
root.render(<App />)
