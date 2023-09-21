import React from 'react'
import './profile.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from './profileInfo/profileInfo.jsx'

function Profile(){
	return(
		<div className='profile'>
			<ProfileInfo/>
			<Posts/>			
		</div>
	)
}
export default Profile