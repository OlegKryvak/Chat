const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div className="message" style={{ marginLeft: '250px', 
        marginTop: '10px',
        marginBottom: '10px',
        color: 'white', backgroundColor: 'darkgreen' }}>
            {message.text}
        </div>
    )
}
export default MyMessage;