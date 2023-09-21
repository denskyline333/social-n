import React from "react"
import ava_min from '../../../img/elon_mini.jpg'
import Post from "./post/post.jsx"

let postsItems = [
    {message: 'Hi, world', id: 1},
    {message: 'I`m Elon Mask, really', id: 2},
    {message: 'Give me some bitcoins', id: 3}
]

function Posts(){
	return(
            <div className='posts'>
				<p>My posts</p>
				<input placeholder='enter the post' />
				<button>Add post</button>
				{postsItems.map((e)=>
				<Post message={e.message} id={e.id}/>)}
            </div>
	)
}
export default Posts