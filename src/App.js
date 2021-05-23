import { IdcardFilled } from '@ant-design/icons';
import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (

    <ChatEngine
      height="100vh"
      projectID="80fdf189-8006-46d4-93a7-d0bd7a4116d8"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />

  );
}

export default App;
