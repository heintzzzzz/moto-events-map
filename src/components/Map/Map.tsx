import { Component, useRef } from 'react';
import { requestApi, requestMock } from '../../utils/common_functions';
import {IEvent} from '../../constants/EventsConstants';


interface IPropsMap{
    events?: IEvent[]
}

interface IStateMap {
    events: IEvent[]
}

class Map extends Component<IPropsMap, IStateMap> {
    private container:any = null;

    constructor(props:any) {
        super(props);

        this.state = {
            events: []
        }

        //this.container = useRef();
    }

    fetchEvents() {

        /*const request:any = {
            url: 'http:localhost:3000/api/',
            method: 'GET',
            action: 'events',
            request: {
                columns: ['id', 'title', 'coords'],
                filters: [],
            }
        }*/

        //requestApi(request);
/*
        let events = requestMock();

/!*        this.setState((state: IStateMap) => ({
            events,
        }));*!/

        this.setState(({
            events: events,
        }));*/
    }

    componentDidMount() {
        //this.fetchEvents();
        this.fetchEvents();
    }

    componentDidUpdate(prevProps: Readonly<IPropsMap>, prevState: Readonly<IStateMap>, snapshot?: any) {
        if(prevState.events !== this.state.events) {

        }
    }

    render() {
        return (<div className={'MapComponent'}>
            <div ref={this.container} id={'Map'} className={'MapContainer'}>
                Map
            </div>
        </div>);
    }
}

export default Map;
