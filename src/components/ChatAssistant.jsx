import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { getAssistantResponse } from '../utils/chatLogic';

export default function ChatAssistant({ countryData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Initial greeting when opened or country changes
  useEffect(() => {
    if (countryData) {
      setMessages([
        {
          id: Date.now(),
          sender: 'assistant',
          text: `Hi! I'm your assistant for the ${countryData.name} election. Ask me anything!`
        }
      ]);
    }
  }, [countryData]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = getAssistantResponse(userMessage.text, countryData);
      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: responseText
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <div className="chat-assistant-wrapper">
      {/* Chat Button */}
      {!isOpen && (
        <button 
          className="chat-toggle-btn shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat Assistant"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window shadow-xl">
          <div className="chat-header">
            <div className="chat-header-title">
              <Bot size={20} />
              <span>Election Assistant</span>
            </div>
            <button 
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`chat-message-row ${msg.sender === 'user' ? 'user-row' : 'assistant-row'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="chat-avatar assistant-avatar">
                    <Bot size={16} />
                  </div>
                )}
                <div className={`chat-bubble ${msg.sender}-bubble`}>
                  {/* React dangerouslySetInnerHTML or just text. For simplicity, just text, or render basic markdown if needed. We'll stick to text here, replacing ** bold with strong tags roughly */}
                  <span dangerouslySetInnerHTML={{ 
                    __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="chat-input"
            />
            <button 
              type="submit" 
              className="chat-send-btn"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
