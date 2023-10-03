import React from "react"
import ava_min from '../../../img/elon_mini.jpg'
import Post from "./post/post.jsx"

let postText = React.createRef()


function Posts(props){
	
	let addPost = () => {
        props.addPost(postText.current.value)
    }
	let onPostChange = () => {
        props.onPostChange(postText.current.value) 
        }
        console.log(props);
	return(
            <div className='posts'>
				<p>My posts</p>
				<input onChange={onPostChange} value={props.newPostText} ref={postText} placeholder='enter the post' />
				<button onClick={addPost}>Add post</button>
				{props.postsItems.map((e)=>
				<Post message={e.message} id={e.id} likes={e.likes}/>)}
            </div>
	)
}
export default Posts