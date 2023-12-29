import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from '../components/Game'

export default (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Game />} />
        </Routes>
    </BrowserRouter>
);
