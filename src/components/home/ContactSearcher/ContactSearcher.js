import { useState } from "react";

import "./ContactSearcher.css";

export default function ContactSearch({onSearch}) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e);
    }

    return(
        <div className="searcherContainer">
            <h2>Search Contact</h2>
            <input type="text" onChange={handleChange} value={value}/>
        </div>
    )
}