import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react'
import Screen from './Screen';
import './Container.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Game(){
    const [wpm, setWpm] = useState(null);
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState([]);
    const [started, setStarted]  = useState();
    function onType(){
        if (!started) setStarted(Date.now());
    };


  
    function onProgress(current,total){
        setProgress(current/total);
        setWpm(current / 5 / ((Date.now() - started)/ 60000))
    }
    const refreshPage = ()=>{
        window.location.reload(); 
     }
    useEffect(()=>{
         axios.get(`http://localhost:3001/text/${(parseInt(54 * Math.random(), 10))}`).then(res =>{
            setText(res.data);
         });
    },[]);

    return(
        <>
        {text ?(
        <div className = 'container'>
                {progress !== 1 ? (
                    <div>
             <Screen 
                        text = {text.content}
                        source = {text.source}
                        onProgress = {onProgress}
                        onType = {onType}/>
           
            <div>
                {(progress * 100).toFixed(0)}% completed {wpm ? `, ${wpm.toFixed(0)} WPM` : '' }
            </div>
            </div>
                ) : (
                <>
                    <h1>Your WPM is: <span style = {{fontWeight:'bold'}}>{wpm.toFixed(0)}</span></h1>
                    <span><button className = 'prompt-button'><Link to = "/">Go Home</Link></button></span>
                <span><button className = 'prompt-button' onClick = {refreshPage}>Try again</button></span>
                </>
                )
            }
        </div>
        ) : 
        (
        <p>Loading...</p>)
        }
        </>
    )

}
Game.propTypes =  {
    wpm: PropTypes.number,
    progress: PropTypes.number,
    text: PropTypes.string.isRequired,
}
export default Game;