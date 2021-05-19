import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import './env';
export class DisplayCard extends Component {
    render() {
        const [apiData, setApiData] = useState({});
        const [getState, setGetState] = useState('Mumbai');
        const [state, setState] = useState('Mumbai');
        const apiKey = MY_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
        return (
            <div>
                
            </div>
        )
    }
}

export default DisplayCard;
