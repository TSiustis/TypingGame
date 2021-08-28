import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
export default function Home() {
    return (
        <div className = 'container'>
            <h1>Check your typing speed!</h1>
            <button className = 'prompt-button'><Link to = "/type">Test typing speed</Link></button>
        </div>
    

        );
}