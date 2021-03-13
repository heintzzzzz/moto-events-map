import * as React from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';

const Header = (props:any) => {

    return (<header className={'Header'}>
        <Menu />
    </header>);
}

export default Header;
