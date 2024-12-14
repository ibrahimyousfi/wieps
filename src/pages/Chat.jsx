import React from 'react';
import '../styles/Chat.css';

function Chat() {
  // مصفوفة من الأسماء العشوائية
  const randomNames = [
    "Sophie Martin",
    "Lucas Bernard",
    "Emma Dubois",
    "Thomas Petit",
    "Léa Richard",
    "Hugo Durand",
    "Chloé Moreau",
    "Nathan Simon",
    "Camille Laurent",
    "Louis Michel"
  ];

  // دالة لاختيار اسم عشوائي
  const getRandomName = () => {
    return randomNames[Math.floor(Math.random() * randomNames.length)];
  };

  // بيانات المحادثات مع أسماء عشوائية
  const conversations = [
    {
      name: getRandomName(),
      time: "il y a 12 min",
      message: "Votre conversation"
    },
    {
      name: getRandomName(),
      time: "il y a 15 min",
      message: "Votre conversation"
    },
    {
      name: getRandomName(),
      time: "il y a 58 min",
      message: "Votre conversation"
    },
    {
      name: getRandomName(),
      time: "il y a 51 min",
      message: "Votre conversation"
    }
  ];

  return (
    <div className="chat-layout">
      <div className="conversations-panel">
        <div className="conversations-list">
          {conversations.map((chat, index) => (
            <div 
              className={`conversation-item ${index === 0 ? 'active' : ''}`} 
              key={index}
            >
              <div className="avatar-wrapper">
                <img 
                  src={`https://i.pravatar.cc/150?img=${index + 20}`} 
                  alt="User" 
                  className="avatar" 
                />
              </div>
              <div className="conversation-content">
                <div className="conversation-top">
                  <span className="user-name">{chat.name}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <p className="chat-preview">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="user-profile">
            <div className="avatar-wrapper">
              <img 
                src="https://i.pravatar.cc/150?img=50" 
                alt="Expert" 
                className="avatar expert-avatar" 
              />
              <span className="status-dot"></span>
            </div>
            <div className="user-info">
              <h3>Ibrahim ysf</h3>
              <span className="user-status">Expert • il y a 1h</span>
            </div>
          </div>
        </div>

        <div className="chat-body">
          <div className="welcome-container">
            <div className="cloud-row">
              <span className="cloud">☁️</span>
              <span className="cloud">☁️</span>
              <span className="cloud">☁️</span>
              <span className="cloud">☁️</span>
            </div>
            <h2>start un conversation avec nou expert</h2>
            <p>cet expert est actif sur TrustMe il y a 1h</p>
          </div>
        </div>

        <div className="chat-footer">
          <div className="message-input">
            <input 
              type="text" 
              placeholder="envoyer un message..."
            />
            <div className="input-actions">
              <button className="action-btn">📎</button>
              <button className="action-btn">🎤</button>
              <button className="action-btn">❤️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;