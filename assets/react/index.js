import React from 'react';
import { render } from 'react-dom';
import Login from "./components/pages/user/login";
import Inscription from "./components/pages/user/inscription";
import Home from "assets/react/components/pages/home/index";
import Shop from "assets/react/components/pages/shop";
import Planing from "assets/react/components/pages/planing";

const home = document.querySelector('[data-home-page]');
const login = document.querySelector('[data-login-page]');
const inscription = document.querySelector('[data-inscription-page]');
const shop = document.querySelector('[data-shop-page]');
const planing = document.querySelector('[data-planing-page]');

if (home) {
    render(<Home/>, home)
}

if (login) {
    render(<Login/>, login);
}

if (inscription) {
    render(<Inscription/>, inscription)
}

if (shop) {
    render(<Shop/>, shop)
}

if (planing) {
    render(<Planing/>, planing)
}