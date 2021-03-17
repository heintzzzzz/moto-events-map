import React from 'react';

interface ILinkProps{
    classnames?: string;
    href?: string;
    title?: string;
    onMouseEnter?: any;
    onMouseLeave?: any;
    parameters?: any;
    onClick?: any;
    children?:any;
}

const Link = (props: ILinkProps) => {

    const [status, setStatus] = React.useState('normal');

    const onHover = (e:any) => {

        setStatus('normal');
        props.onMouseEnter(e);
    }

    const onLeave = (e:any) => {


        setStatus('hovered');
        props.onMouseLeave(e);
    }

    return(<a
        className={props.classnames}
        {...props.parameters}
        href={props.href || '#'}
        title={props.title}
        onMouseEnter={(e) => onHover(e)}
        onMouseLeave={(e) => onLeave(e)}
        onClick={(e) => props.onClick(e)}
        >{props.children}</a>);
}

export default Link;
