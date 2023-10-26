import React, { useState } from "react";
import Socio from "../../images/socio_final.png"
import Authinput from "./Authinput";
import Button from "./Button";

export default function Authenticate(){

    const [activeTab, setActiveTab] = useState('login');

    function login(){
        setActiveTab('login');
    }

    function register(){
        setActiveTab('register');
    }

    return (
        <div className="body">
            <div className="Authenticate">
                <div className="Authenticate-body">
                    <div className="Socio-logo">
                        <img src={Socio} alt="Socio" />
                    </div>
                    <div className="Auth-container">
                        <div className="Toggle-buttons">
                            <p id="login" onClick={login} style={
                                {
                                    cursor: 'pointer',
                                    backgroundColor : activeTab === 'login' ? '#fdfdfd' : null,
                                    color: activeTab === 'login' ? '#060608' : '#fdfdfd',
                                    borderTopRightRadius: activeTab === 'login' ? '10px' : null
                                }
                            }>Login</p>
                            <p id="register" onClick={register} style={
                                {
                                    cursor: 'pointer',
                                    backgroundColor : activeTab === 'register' ? '#fdfdfd' : null,
                                    color: activeTab === 'register' ? '#060608' : '#fdfdfd',
                                    borderTopLeftRadius: activeTab === 'register' ? '10px' : null
                                }
                            }>Register</p>
                        </div>
                        <div className="Form">
                            <Authinput type="text" placeholder="Enter your Username"  />
                            <Authinput type="text" placeholder="Enter your Password"  />
                            <Authinput type="text" placeholder="Confirm your Password" tab={activeTab} />
                            <Button buttonType="Login"/>
                            <a href="button.jsx">Forgot Password?</a >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}