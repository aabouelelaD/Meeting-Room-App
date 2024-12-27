import React, { useEffect, useState } from 'react';
import { getMeetings } from '../api';


const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

//TODO: to be changed to dynamic values after the API integration of login
useEffect(() => {
    getMeetings({startDate: '2024-12-27T09:00:00.000Z', endDate:'2024-12-27T18:00:00.000Z', roomId: '7'})
        .then(data => {
            setData(data);
        })
        .catch(err => {}).finally(() => {setLoading(false)})
}, []);


export {data, loading}