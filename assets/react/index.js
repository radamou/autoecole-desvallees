import React from 'react';
import { render } from 'react-dom';
import Login from "./components/user/login";
import Inscription from "./components/user/inscription";

const login = document.querySelector('[data-login-page]');
const inscription = document.querySelector('[data-inscription-page]');

if (login) {
    render(<Login/>, login);
}

if(inscription) {
    render(<Inscription/>, inscription)
}
