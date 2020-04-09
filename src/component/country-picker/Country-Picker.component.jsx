import React, { useState, useEffect } from 'react';
import './Country-Picker.style.scss';
import { fetchCountry } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core'

const CountryPicker = () => {
    const [ fetchedCountry, setFetchedCountry ] = useState([]);
    useEffect(() => {
        const fetchedAPI = async() => {
            setFetchedCountry(await fetchCountry())
        }
        fetchedAPI()
    }, [setFetchedCountry]);

    console.log(fetchedCountry)

    return (
        <FormControl className='picker-conatiner'>
            <NativeSelect>
                {fetchedCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;