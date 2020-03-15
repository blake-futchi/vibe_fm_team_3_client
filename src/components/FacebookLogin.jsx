import React, { Component } from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';


class FacebookLogin extends Component {


    handleResponse = data => {
        const response = await.axios.post("http://localhost:3000/api/v1/auth", {
            uid: data.profile.id,
            email: data.profile.email,
            provider: "facebook"
        });

        if (response.status == 200) {
            debugger;
        } else {
            debugger;
        }

    }

    render() {
        return (
            <div>
                <FacebookProvider appId="869256990162492">
                    <LoginButton
                        scope="email"
                        onCompleted={this.handleResponse}
                    >
                        <span>Login via Facebook</span>
                    </LoginButton>
                </FacebookProvider>
            </div>
        )
    }
}

export default FacebookLogin;