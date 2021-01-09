import React from 'react';
import { render } from 'react-dom';
import Login from "./components/user/login";

render(
    <Login />,
    document.querySelector('[data-login-page]')
);