import React from 'react'
import './profile.css'
import ava from '../../img/elon.jpg'
import ava_min from '../../img/elon_mini.jpg'
import Posts from './posts/posts.jsx'
function Profile(){
	return(
		<div className='profile'>
			<div className='me'>
				<img src={ava} alt="profile mini photo" /> 
				<p>Elon Musk</p>
			</div>
			<Posts/>
			
		</div>
	)
}
export default Profile