import React from 'react'
import './dialogs.css'
import Message from './message/message.jsx'
import DialogsItem from './dialogsItem/dialogsItem'

let dialogNames = [
  {name:'Ivan Ivanov', id: 1},
  {name:'Ilon Mask', id: 2},
  {name:'Bill Gates', id: 3}
]
let messageItems = [
  {message:'Hi!', id: 1},
  {message:'Go on the Mars', id: 1},
  {message:'Where is my chip?', id: 1}
]


function Dialogs(props) {
    return (
        <div className="dialogs">
            <div className='dialog'>
              {dialogNames.map((e)=>
                  <DialogsItem name = {e.name} id={e.id}/>)}
            </div>

            <div className="messages">
                {messageItems.map((e)=>
                  <Message message = {e.message} id={e.id}/>)}
            </div>
            <div className="code">
                <input type="text"/>
                <button>Отправить</button>
            </div>
        </div>
    )
  }
export default Dialogs