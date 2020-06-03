import React from 'react';
import './SettingsContainer.css';

interface ContainerProps {
    name: string;
}

const SettingsContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <strong>{name}</strong>
            <p>Settings</p>
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

export default SettingsContainer;