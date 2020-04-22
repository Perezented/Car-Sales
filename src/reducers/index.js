export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: [],
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 },
    ],
};

export const rootReducer = (state = initialState, action) => {
    console.log('in rootReducer: ', state, action);
    console.log('state: ', state);
    switch (action.type) {
        case 'REMOVE_FEATURE':
            return {
                ...state,
                car: {
                    features: state.car.features.map((value) => {
                        console.log(value);
                        return value;
                    }),
                },
            };
        case 'ADD_FEATURE':
            return {
                ...state,
                car: {
                    features: state.car.features.map((value) => {
                        console.log(value);
                        return value;
                    }),
                },
            };
        default:
            return state;
    }
};
