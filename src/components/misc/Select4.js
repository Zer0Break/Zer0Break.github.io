
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
        

export default function FloatLabelDemo(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const label = props.label;
    const optiones = props.optiones;
    

    return (
        <div className="card flex justify-content-center w-full p-fluid">
            <span className="p-float-label ">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={optiones} optionLabel="name" className="w-full md:w-14rem" />
                <label htmlFor="dd-city">{label}</label>
            </span>
        </div>
    )
}
        