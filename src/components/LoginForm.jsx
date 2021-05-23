import { useState } from "react"
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "80fdf189-8006-46d4-93a7-d0bd7a4116d8",
            'User-Name': username,
            'User-Secret': password
        }

        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        }catch(error){
            setError('Oops...Incorect credentials')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Aplication</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} className="input" placeholder="Username" required
                        onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" value={password} className="input" placeholder="Password" required
                        onChange={(e) => setPassword(e.target.value)} />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;