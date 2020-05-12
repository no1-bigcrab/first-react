var initialState = {
        by: 'name',
        value: 1
}

var myReducer = (state = initialState, action ) => {
    
    if (action.type === 'SOFT') {
        var { by, value } = action.soft;

        return {
                by: by,
                value: value
        };
    }
    return state;
}

export default myReducer;