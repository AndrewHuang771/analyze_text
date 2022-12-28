import React from 'react';

export default function ClearButton(props) {
    return (
        <>
            <div className="clearButton button" onClick={props.onClick}>
                Clear
            </div>
        </>
    )
}
