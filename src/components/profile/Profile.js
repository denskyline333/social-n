import React from 'react'
import './profile.css'
import Posts from './posts/posts.jsx'
import ProfileInfo from './profileInfo/profileInfo.jsx'

function Profile(props){
	return(
		<div className='profile'>
			<ProfileInfo/>
			<Posts postsItems={props.postsItems} addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange}/>			
		</div>
	)
}
export default Profile