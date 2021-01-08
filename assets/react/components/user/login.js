class Login extends React.Component {
    renderLogin() {
        return <Login />
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-page__presentation-area">

                </div>
                <div className="login-page__form">
                    <div className="login-page__Form--email"><input/></div>
                    <div className="login-page__form--password"><input/></div>
                </div>
                <div className="login-page__socials-media">
                    <div className="login-page__socials-media--facebook"><button/></div>
                    <div className="login-page__socials-media--gmail"><button/></div>
                </div>
            </div>
        )
    }
}