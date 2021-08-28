import React from 'react';
import {useLocation} from 'react-router-dom';

export default function NotFound() {
    let location = useLocation();

    return (
        <div>
            <h1>How did you get here?</h1>
             <h3>No match for <span style = {{fontStyle:'italic'}}><code>{location.pathname}</code></span></h3>
        </div>
    )
}