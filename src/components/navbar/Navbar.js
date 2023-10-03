import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import ava from "./miniava.png"

function Navbar(props){
	return(
		<div className='navbar'>
		  <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/messages'> Messages</NavLink>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/dialogs'>Dialogs</NavLink>
		  <div className='friends'>
            <p>Friends:</p>
            {props.friends.map((e)=> 
                <NavLink to='/dialogs'>
			        	<img src={ava}></img>
                <br/>
                <p>{e.name}</p>
                </NavLink>
              )   
            }            
          </div>
	
                       
          
		</div>
	)

}

export default Navbar