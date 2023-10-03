import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
import Header from'./components/header/Header.js'
import Navbar from './components/navbar/Navbar.js'
import Profile from './components/profile/Profile.js'
import Dialogs from './components/dialogs/dialogs.jsx'




function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar friends={props.state.friends}/>
        <Switch>
          <Route exact path='/' render={()=> <Profile postsItems = {props.state.postsItems} addPost={props.addPost} newPostText={props.state.newPostText} onPostChange={props.onPostChange}/>} />
          <Route exact path="/profile" render={()=> <Profile postsItems = {props.state.postsItems} addPost={props.addPost} newPostText={props.state.newPostText} onPostChange={props.onPostChange}/>}/>
          <Route exact path='/dialogs' render={()=> <Dialogs dialogNames={props.state.dialogNames} messageItems={props.state.messageItems} sendMessage={props.sendMessage} onMessageChange={props.onMessageChange} newMessageText={props.state.newMessageText} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
