import {useState} from 'react';
import './Menu.scss';

const Menu = (props:any) => {
    const [extended, toggleExtended] = useState(false);
    const toggleMenu = () => toggleExtended(!extended);
    return(<div className={'Menu'}>
        <div onClick={() => toggleMenu()}
             className={'Menu__Button'}></div>
        <nav className={'Menu__List'}>
            <div className={'Menu__ListItem'}>Map</div>
            <div className={'Menu__ListItem'}>List</div>
            <div className={'Menu__ListItem'}>About</div>
        </nav>
    </div>);
}

export default Menu;
