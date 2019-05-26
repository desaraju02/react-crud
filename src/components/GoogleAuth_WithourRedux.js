import React from 'react';

class GoogleAuth extends React.Component{

    state = {
        isSignedIn:null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId:'1023873591159-59barln94avds6uo14dq0bfu658rgor7.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth  = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                });
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }


    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null)
            return null;
        else if(this.state.isSignedIn)
            return (
                <button className='ui red google button' onClick={this.onSignOutClick} >
                    <i className='google icon' />
                    Sign Out!
                </button>
            );
        else    
        return (
            <button className='ui green google button' onClick = {this.onSignInClick}>
                <i className='google icon' />
                Sign In!
            </button>
        );
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }

}

export default GoogleAuth;