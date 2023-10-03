import React from 'react'
import './dialogs.css'
import Message from './message/message.jsx'
import DialogsItem from './dialogsItem/dialogsItem'

let ref = React.createRef()


function Dialogs(props) {
    let sendMessage = () => {
        props.sendMessage(ref.current.value) 
        }
    let onMessageChange = () => {
        props.onMessageChange(ref.current.value) 
        console.log(props);
        }
    return (
        <div className="dialogs">
            <div className='dialog'>
              {props.dialogNames.map((e)=>
                  <DialogsItem name = {e.name} id={e.id}/>)}
            </div>

            <div className="messages">
                {props.messageItems.map((e)=>
                  <Message message = {e.message} id={e.id}/>)}
            </div>
            <div className="code">
                <input onChange={onMessageChange} value={props.newMessageText} ref={ref} type="text"/>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
  }
export default Dialogs