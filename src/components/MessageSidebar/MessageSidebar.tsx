import React from 'react';
import './MessageSidebar.scss';
import MessageList from '../MessageList/MessageList';
import MessageForm from '../MessageForm/MessageForm';


const MessageSidebar = (props:any) => {
    console.log('props');
    console.log(props);
    const [user, setUser] = React.useState(null);
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {

    }, [user, messages]);

    return(<div className={`MessageBox ${(props.expandedSidebar) ? 'expandedSidebar' : ''}`}>
        <div className={'MessageBox__Header'}>MessageBox</div>
        <div className={'MessageBox__Body'}>
            <MessageList messages={messages} />
            <MessageForm user={user} />
        </div>
    </div>);
}

export default MessageSidebar;
