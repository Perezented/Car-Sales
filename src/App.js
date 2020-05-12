import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';

const App = (state) => {
    console.log(state);
    return (
        <div className="boxes">
            <div className="box">
                <Header car={state.state.car} />
                <AddedFeatures car={state.state.car} />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={state.state.additionalFeatures}
                />
                <Total
                    car={state.state.car}
                    additionalPrice={state.state.additionalPrice}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return state;
};

export default connect(mapStateToProps, {})(App);
