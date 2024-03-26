import { useState, useEffect } from 'react';
import './index.css';

const Message = ({ item }) => {
  const { username, time,message } = item;

  const [count, setCount] = useState(0);
  const [profileColor, setProfileColor] = useState('');
  

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    setProfileColor(getRandomColor());
  }, []);

  const profileIcon = username[0];

  const Hours = time.getHours();
  const Minutes = time.getMinutes();

  const incrementCount = () => {
    setCount(count + 1);
  };



  return (
    <li>
      <div className='message-sent-container'>
        <div className='message-user-details-container'>
          <p className='message-user-icon' style={{ backgroundColor: profileColor }}>{profileIcon}</p>
          <p className='message-user-name'>{username}</p>
          <p className='message-user-time'>{`${Hours}:${Minutes}`}</p>
        </div>
        <div style={{ display: 'inline-block', flexGrow: 1, alignSelf: 'flex-end' }}>
          <p className='message-sent'>{message}</p>
          <button type="button" className='message-like-button' onClick={incrementCount}>
            <i className="fa-regular fa-heart"></i>
          </button>
          <p className='message-likes-count'>{count}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
