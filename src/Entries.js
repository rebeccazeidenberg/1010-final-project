import React from "react";
import Entry from './Entry';

function Entries(props) {
    return(
        <div className="Entries">
        {props.entries.map((e, i) => {
            return <Entry entry={e} key={i}/>
            }
        )}
        </div>
    )
}
export default Entries;