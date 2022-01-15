const UserReducer = (state, action) => {

    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SUBMITTED':
            return {
                ...state,
                loading: false,
                submitted: true
            }
        case 'GET_OPTIONS':
            return {
                ...state,
                states: action.payload.states.map(state => ({label: state.abbreviation, value: state.name})),
                occupations: action.payload.occupations.map(occupation => ({label: occupation, value: occupation})),
                loading: false
            }
            default:
                return state
    }
}

export default UserReducer