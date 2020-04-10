import React, { useState, useEffect } from 'react';
import './Country-Picker.style.scss';
import { fetchCountry } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core'

const CountryPicker = ({ handleCountryChange }) => {
    const [ fetchedCountry, setFetchedCountry ] = useState([]);
    useEffect(() => {
        const fetchedAPI = async() => {
            setFetchedCountry(await fetchCountry())
        }
        fetchedAPI()
    }, [setFetchedCountry]);

    return (
        <FormControl className='picker-conatiner'>
            <NativeSelect onChange={(event) => handleCountryChange(event.target.value)} >
                <option value=''>Global</option>
                {fetchedCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;