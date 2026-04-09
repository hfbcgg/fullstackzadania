const Notification = ({message}) => {
  const NotificationStyle = {
    color: 'green',
    borderRadius: '5px',
    backgroundColor: 'gray',
    border: 'solid 2px green',
    padding: '5px',
    margin: '5px',
    fontSize: '20px'
  }
  const ErrorStyle={
    color: 'red',
    borderRadius: '5px',
    backgroundColor: 'gray',
    border: 'solid 2px red',
    padding: '5px',
    margin: '5px',
    fontSize: '20px'
  }
  if (message === null) {
    return null
  }

  if(message.type=="message"){
    return (
      <div className={message.type} style={NotificationStyle}>
        {message.text}
      </div>
    )
    
  }
  if(message.type=="error"){
    return (
      <div className={message.type} style={ErrorStyle}>
        {message.text}
      </div>
    )
  }
}

export default Notification