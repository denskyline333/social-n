
let state = {

       postsItems : [
        {message: 'Hi, world', id:1, likes: 0},
        {message: 'I`m Elon Mask, really', id:2, likes: 3},
        {message: 'Give me some bitcoins', id:3,likes: 10}
    ],
    newPostText:'hello',
       dialogNames : [
        {name:'Ivan Ivanov', id: 1},
        {name:'Ilon Mask', id: 2},
        {name:'Bill Gates', id: 2}
    ],
        messageItems : [
        {message:'Hi!', id: 1},
        {message:'Go on the Mars', id: 1},
        {message:'Where is my chip?', id: 1}
    ],  
    newMessageText:'Hello',
        friends : [
            {ava: '1', name: 'Vasya'},
            {ava: '1', name: 'Nikita'},
            {ava: '1', name: 'Oleg'}
        ]    
      
    
}
let rerenderTree = () => {

    console.log('It is fake function');
    
    }

export default state
export let addPost = (postText)=> {
    let newPost = {
        message: postText,
        id: 4,
        likes: 0
    }
    state.postsItems.unshift(newPost)
    state.newPostText = ''
    console.log(state);
    rerenderTree(state)
}
export let sendMessage = (message) => {
    let newMessage= {
    message: message,
    id: 4
    }
    state.messageItems.unshift(newMessage)
    console.log(state);
    rerenderTree(state)
    }

export let onPostChange = (text) => {
        state.newPostText = text
        rerenderTree(state)
    }
export let onMessageChange = (text) => {
        state.newMessageText = text
        rerenderTree(state)
    }

export let subscribe = (observer) =>{
    rerenderTree = observer
}
