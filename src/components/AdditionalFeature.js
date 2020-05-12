import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from '../actions';

const AdditionalFeature = (props) => {
    console.log('additionalFeature props', props);
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    props.addFeature(props.feature);
                }}
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

const mapStateToProps = (state) => {
    console.log('mSTP: ', state);
    return { state };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(
    AdditionalFeature
);
