import axios from 'axios';
import React, { useEffect } from 'react'

export default function Weather() {


    useEffect(() => {
        getWeatherToday()
    }, []);
    const getWeatherToday = async () => {
        try {
            let data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=f940561a277d552c3b894777566e82f2&units=metric')
            console.log(data.data);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            Weather
        </div>
    )
}
