import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import state from './data/state.jsx'
import {addPost} from './data/state.jsx'
import {sendMessage} from './data/state.jsx';
import {onPostChange } from './data/state.jsx';
import {onMessageChange } from './data/state.jsx';
import {subscribe} from './data/state.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree = (state) => {
   
    root.render(
    <React.StrictMode>
        <App state={state} 
        addPost={addPost} 
        sendMessage={sendMessage}
        onPostChange={onPostChange}
        onMessageChange={onMessageChange}
        />
        
    </React.StrictMode>
);}

rerenderTree(state)
subscribe(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
