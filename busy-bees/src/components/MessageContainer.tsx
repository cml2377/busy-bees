import React from 'react';
import './MessageContainer.css';

interface ContainerProps {
  name: string;
}

const MessageContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <br></br>
      <strong>Theme Colors:</strong>
      <ul>
        <li style={{ listStyle: "none", }}>Yellow: #ffc066</li>
        <li style={{ listStyle: "none", }}>Dark blue-black: #263740</li>
        <li style={{ listStyle: "none", }}>Light gray-blue: #C2D5D8</li>
      </ul>
    </div >
  );
};

export default MessageContainer;
