import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Repo from './Repo';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" component={App} exact />
            <Route path="/repo" component={Repo} />
        </Routes>
    </BrowserRouter>
);

export default Router;