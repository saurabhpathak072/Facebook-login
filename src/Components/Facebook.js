import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    constructor(){
        super();
        this.state={
            isLoggedIn:false,
            userID:'',
            name:'',
            photo:'',
            email:'',
            accessToken:''
        }
    }
    responseFacebook = response=>{
         console.log(response);
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            photo:response.picture.data.url,
            email:response.email,
            accessToken:response.accessToken
        })
    }
    componentClicked =()=>console.log("Clicked");
    render() {
        console.log("Facebook");
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent=<div 
            style={{
                width:'100%',
                margin:'auto',
                background:'#f4f4f4',
                padding:'20px'
            }}
            >
                <img src={this.state.photo} alt="profile" title={this.state.name}/>
        <h2>Welcome {this.state.name}</h2>
        <p>Email: {this.state.email}</p>
        AccessToken :{this.state.accessToken}
            </div>;
        }else{
           fbContent= (<FacebookLogin
    appId="2740000449658479"
    autoLoad={true}
    fields="name,email,picture"
    redirectUri="https://www.amazon.in/dp/B073Q5R6VR/ref=fs_a_mn_1"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />)
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
