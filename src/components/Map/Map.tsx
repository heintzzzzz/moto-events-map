import { Component, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { requestApi, requestMock } from '../../utils/common_functions';
import {IEvent} from '../../constants/EventsConstants';
import * as L from 'leaflet';

interface IPropsMap{
    events?: IEvent[]
}

interface IStateMap {
    map: any,
    token: any,
    events: IEvent[],
    dots: []
}

class Map extends Component<IPropsMap, IStateMap> {
    private container:any = null;

    constructor(props:any) {
        super(props);

        this.state = {
            map: null,
            token: process.env.REACT_APP_MAP_TOKEN,
            events: [],
            dots: [],
        }
    }

    mockData:any = [
        {
            id: 1,
            title: 'title 1',
            coords: [59.953246, 30.254180],
        },
        {
            id: 2,
            title: 'title 212312312312312',
            coords: [59.912928, 30.276840],
        },
        {
            id: 3,
            title: 'title 3',
            coords: [59.888783, 30.402496],
        },
        {
            id: 4,
            title: 'title 4',
            coords: [60.002113, 30.422408],
        },
    ];

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

        setTimeout(() => {
            this.setState((state: any) => ({
                events: this.mockData
            }))
        }, 200);
    }

    componentDidMount() {
        const map = L.map('map', {
            center: [59.912928, 30.276840],
            zoom: 10
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '©OpenStreetMap, ©CartoDB'
        }).addTo(map);

        this.setState(({
            map: map
        }));

        this.fetchEvents();
    }

    componentDidUpdate(prevProps: Readonly<IPropsMap>, prevState: Readonly<IStateMap>, snapshot?: any) {
        if(prevState.events !== this.state.events) {
            this.fetchEvents();
        }

        if(prevState.events !== this.state.events) {
            let dots:any = [];

            this.state.events.forEach((ev) => {
                let circle_icon = `<svg 
                class="circle_icon" 
                viewbox="0 0 54 54" 
                width="54" 
                height="54">`;

                const circle = '<circle cx="27" cy="27" r="10" stroke="red" stroke-width="1" fill="cyan"/>';
                circle_icon += circle;
                circle_icon += '</svg>';

                const icon = L.divIcon({
                    html: `${circle_icon} <span class='iconImgText'>${ev.title}</span>`,
                    className: 'iconImg',
                    iconSize: [54, 54],
                    iconAnchor: [27, 27],
                });

                let dot = L.marker(ev.coords, {icon: icon}).addTo(this.state.map);

                dots.push(dot);
            });
            this.setState(({
                dots: dots
            }));
        }
    }

    render() {

        console.log(this.state);

        return (<div className={'MapComponent'}>
            <div
                ref={this.container}
                id={'map'}
                className={'MapContainer'}
            >
            </div>
        </div>);
    }
}

export default Map;
