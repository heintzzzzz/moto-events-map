import React from 'react';

const MessageForm = (props:any) => {

    const [user, setUser] = React.useState(null);


    React.useEffect(() => {

    }, [user]);

    return(<div className={'MessageForm'}>
    </div>);
}

export default MessageForm;
