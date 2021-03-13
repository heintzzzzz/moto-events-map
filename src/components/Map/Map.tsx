import { Component, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { requestApi, requestMock } from '../../utils/common_functions';
import {IEvent} from '../../constants/EventsConstants';
import * as L from 'leaflet';
import 'leaflet.markercluster';

interface IPropsMap{
    events?: IEvent[]
}

interface IStateMap {
    map: any,
    token: any,
    events: IEvent[],
    dots: []
}

function getDotCatImage(cat_id: number) {

    let cat = `activity`;
    switch(cat_id) {
        case 0:
            cat = `archive`;
            break;
        case 1:
            cat = `boolmark`;
            break;
        case 2:
            cat = `bar-chart`;
            break;
        default:
            cat = `check-square`;
            break;
    }

    //return `/images/icons/${cat}.svg`;
    return `<svg xmlns="http://www.w3.org/2000/svg" 
                width="54" 
                height="54" 
                viewBox="0 0 54 54" 
                fill="green" 
                stroke="lime" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="feather1 
                feather-activity">
                <circle cx="27" cy="27" r="27" stroke="blueviolet" stroke-width="1" fill="grey"/>
                <circle cx="27" cy="27" r="14" stroke="blueviolet" stroke-width="1" fill="orange"/>
                <polyline points="37 27 33 27 30 36 26 18 21 27 17 27"></polyline>
                <text>11</text>
             </svg>`;
}

function createDotIcon(data:any) {
    const cat_image = getDotCatImage(data.cat_id);

    const icon = L.divIcon({
        //html: `${circle_icon} <span class='iconImgText'>${data.title}</span>`,
        html: `${cat_image}`,
        className: 'iconImg',
        iconSize: [54, 54],
        iconAnchor: [27, 27],
    });

    return icon;
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
            cat_id: 1,
            coords: [59.953246, 30.254180],
        },
        {
            id: 2,
            title: 'title 212312312312312',
            cat_id: 2,
            coords: [59.912928, 30.276840],
        },
        {
            id: 3,
            title: 'title 3',
            cat_id: 3,
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
/*                let circle_icon = `<svg
                class="circle_icon" 
                viewbox="0 0 54 54" 
                width="54" 
                height="54">`;*/

/*                const circle = '<circle cx="27" cy="27" r="10" stroke="red" stroke-width="1" fill="cyan"/>';
                circle_icon += circle;
                circle_icon += '</svg>';

                const icon = L.divIcon({
                    html: `${circle_icon} <span class='iconImgText'>${ev.title}</span>`,
                    className: 'iconImg',
                    iconSize: [54, 54],
                    iconAnchor: [27, 27],
                });*/

                const icon = createDotIcon(ev);

                let dot = L.marker(ev.coords, {icon: icon}).addTo(this.state.map);

                //cluster
                let markerCluster = L.markerClusterGroup({
                    maxClusterRadius: 50,
                    showCoverageOnHover: false,
                    //iconCreateFunction: createClusterIconSvg
                });

                dots.push(dot);
            });
            this.setState(({
                dots: dots
            }));
        }
    }

    render() {

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
