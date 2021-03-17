import {useState} from 'react';
import './Menu.scss';

const Menu = (props:any) => {
    const [extended, toggleExtended] = useState(false);
    const toggleMenu = () => toggleExtended(!extended);

    return(<div className={`Menu ${(extended) ? 'ExtendedMenu' : ''}`}>
        <div onClick={() => toggleMenu()} className={'Menu__Button Toggle__Menu'}>&nbsp;</div>

        <nav className={'Menu__List'}>
            <div className={'Menu__ListItem'}>Map</div>
            <div className={'Menu__ListItem'}>List</div>
            <div className={'Menu__ListItem'}>About</div>
        </nav>

        <div onClick={() => props.toggleChat()} className={'Menu__Button Toggle__Sidebar Button'}>
            &nbsp;
        </div>
    </div>);
}

export default Menu;
