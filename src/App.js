import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
    const removeFeature = (item) => {
        // dispatch an action here to remove an item
    };

    const buyItem = (item) => {
        // dipsatch an action here to add an item
    };

    return (
        <div className="boxes">
            <div className="box">
                {/* <Header car={this.state.car} />
                <AddedFeatures car={this.state.car} />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={this.state.additionalFeatures}
                />
                <Total
                    car={state.car}
                    additionalPrice={this.state.additionalPrice}
                /> */}
            </div>
        </div>
    );
};

export default App;
