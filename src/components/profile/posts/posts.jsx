import react from "react"
import ava_min from '../../../img/elon_mini.jpg'
import Post from "./post/post.jsx"
function Posts(){
	return(
            <div className='posts'>
				<p>My posts</p>
				<input placeholder='enter the post' />
				<button>Add post</button>
				<Post message="valera"/>
                <Post message="komment"/>
                <Post/>
            </div>
	)
}
export default Posts