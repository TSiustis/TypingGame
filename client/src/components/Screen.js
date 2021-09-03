import React, {useState} from 'react';
import './Screen.css';
function Screen({onProgress,onType, source, text}){
    const [chars, setChars] = useState(0);
    const [inputText, setInputText] = useState('');
    
    function onChange(e){

        if(onType) onType();
        const nextInputText = e.target.value;
        if (
            nextInputText === String(text).substr(chars) ||
            (nextInputText.endsWith(' ') &&
            String(text).substr(chars, nextInputText.length) ===
                nextInputText)
          ) {
            const nextChars = chars + nextInputText.length
            setInputText('');
            setChars(nextChars);
            if (onProgress) {
              onProgress(nextChars, text.length)
            }
          } else {
              setInputText(nextInputText.replace(/^\s+/, ''))
          }
        }
          const ok = String(text).substr(chars).startsWith(inputText);
          const previous = String(text).substr(0, chars);
          const current = (String(text).substr(chars).match(/^\S+/) || [''])[0]
          const next = String(text).substr(chars + current.length);
          const done = text ? chars === text.length : 1;
        
          return (
            <div>
              <div>
                
                {
                ok === true ? (<div> 
                <span className = 'previous' >{previous}</span>
                <span className = 'current-ok'>{current}</span>
                <span className = 'next' > {next}</span>
              </div>)
              :
              (<div> 
                <span className = 'previous'>{previous}</span>
                <span className = 'current-not-ok'>{current}</span>
                <span className = 'next'>{next}</span>
              </div>)
    }

          <div className = 'source'>
                    from {source}
            </div> 
              <div className = 'input-area'>
                <label htmlFor = 'text'>Type the text: </label>
                {ok === true ? (
                  <div >
                <input  class = 'input-ok'
                       id = 'text'
                       autoFocus
                       onChange = {onChange}
                       value = {inputText}
                       disabled = {done}/>
                       </div>
                ) :
                (<div >
                <input  class = 'input-not-ok'
                       id = 'text'
                       autoFocus
                       onChange = {onChange}
                       value = {inputText}
                       disabled = {done}/>
                       </div>)
    }
                       </div>

            </div>
            </div>
          )
    }

export default Screen;