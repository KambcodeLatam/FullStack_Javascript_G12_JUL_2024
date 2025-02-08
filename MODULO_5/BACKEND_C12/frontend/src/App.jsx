import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Agregar mensaje del usuario
    const userMessage = { text: input, isUser: true }
    setMessages(prev => [...prev, userMessage])
    
    const response = await fetch('https://test-production-05db.up.railway.app/send-messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ message: input })
    })
    const data = await response.json()
    console.log(data)
    const chefResponse = {
      text: data.content,
      isUser: false
    }
    
    setInput('')
    
    // Simular delay de respuesta

    setMessages(prev => [...prev, chefResponse])

  }

  return (
    <div className="app">
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user' : 'chef'}`}>
              {msg.text.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tus ingredientes..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default App