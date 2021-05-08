import { ChatEngine } from 'react-chat-engine' ;
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
         
            height = "100vh"
            projectID = "d3e79a77-5592-407e-ad05-af5f35976584"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;