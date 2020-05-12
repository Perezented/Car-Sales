import React from 'react';
import AddedFeature from './AddedFeature';
import { useDispatch } from 'react-redux';

const AdditionalFeature = (props) => {
    const dispatch = useDispatch();

    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(props.feature);
                    dispatch({
                        type: 'ADD_FEATURE',
                        payload: props.feature,
                    });
                    // return e.target.value;
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
