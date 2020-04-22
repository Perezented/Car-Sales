import React from 'react';

const AdditionalFeature = (props) => {
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(e.target.value);
                    return e.target.value;
                }}
                value={[props.feature.name, props.feature.price]}
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

export default AdditionalFeature;
