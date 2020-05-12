export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (additionalPrice) => {
    return { type: ADD_FEATURE, payload: additionalPrice };
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (newTotal) => {
    return { type: REMOVE_FEATURE, payload: newTotal };
};
