import React from 'react';
import { render } from 'react-dom';
import Login from "./components/user/login";
import Inscription from "./components/user/inscription";
import Home from "assets/react/components/home/homepage";

const home = document.querySelector('[data-home-page]');
const login = document.querySelector('[data-login-page]');
const inscription = document.querySelector('[data-inscription-page]');

if(home) {
    render(<Home/>, home)
}

if (login) {
    render(<Login/>, login);
}

if(inscription) {
    render(<Inscription/>, inscription)
}
