import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { loginStyles } from "./loginStyle";

export default function Login() {
    const loginCss = loginStyles();

    return (
        <div className={ loginCss.root }>
            <div className={ loginCss.rootPresentation }>
                <img src="" alt="auto ecole des vallées" />
            </div>
            <div className="login-page__form">
                <div className="form">
                    <div className="email"><input/></div>
                    <div className="password"><input/></div>
                </div>
                <div className="login-page__socials-media">
                    <div className="login-page__socials-media--facebook">
                        <Button color="primary" variant="contained">facebook</Button>
                    </div>
                    <div className="login-page__socials-media--gmail">
                        <Button color="primary" variant="contained">Gmail</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
