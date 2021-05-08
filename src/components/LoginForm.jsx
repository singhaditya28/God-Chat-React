import { useState } from "react";
import axios from'axios';

const LoginForm = () => {
    const [username, setUsername] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();

        //username | password => chatengine -> give messages
        const authObject = {'Project-ID' : "d3e79a77-5592-407e-ad05-af5f35976584", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers : authObject});

            // works -> logged in
            localStorage.setItem('username',username);
            localStorage.setItem('password',password); //Saving Credentials in local Storage

            window.location.reload(); // TO diffrentiate when to show the login form and when to show the ChatEngine
        } catch (error) {
            
            //error -> try with other credential
            setError('Oh No!  Incorrect Credentials.')
        }
        
        
        
    }

    return(
        <div className = "wrapper">
            <div className = "form">
                <h1 className = "title">God Chat</h1>
                <form onSubmit= {handleSubmit}>
                    <input type ="text" value = {username} onChange={(e) => setUsername(e.target.value)} className = "input" placeholder = "Username " required />
                    <input type ="password" value = {password} onChange={(e) => setPassword(e.target.value)} className = "input" placeholder = "Password " required />
                    <div align = "center">
                        <button type="submit" className = "button">
                            <span>Start Talking</span>
                        </button>
                    </div>
                    <h2 className = "error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;