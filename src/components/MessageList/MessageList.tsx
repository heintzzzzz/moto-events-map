import React from 'react';

const MessageList = (props:any) => {

    const [user, setUser] = React.useState(null);


    React.useEffect(() => {

    }, [user]);

    return(<div className={'MessageList'}>
    </div>);
}

export default MessageList;
