import React from 'react';

export default function SubmitButton(props) {
    return (
        <>
            <div className="submitButton" onClick={props.onClick}>
                Analyze
            </div>
        </>
    )
}
