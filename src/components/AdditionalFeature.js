import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from '../actions/mainActions';

const AdditionalFeature = (props) => {
    console.log('additionalFeature props', props);
    console.log(props.state);
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                className="button"
                onClick={() => {
                    props.addFeature(props.feature.price);
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
    return {
        state: state.state,
    };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(
    AdditionalFeature
);
