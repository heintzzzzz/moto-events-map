import * as React from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';

const Header = (props:any) => {
    return (<header
        className={'Header'}>
        <Menu
            toggleChat={props.toggleChat}
        />
    </header>);
}

export default Header;
