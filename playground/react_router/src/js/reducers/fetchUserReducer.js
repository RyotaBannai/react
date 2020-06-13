export default function reducer (state = [], action) {
    switch (action.type) {
        case "FETCH_USERS_START":
            break;
        case "FETCH_USERS_ERROR":
            break;
        case "RECEIVE_USERS":
            console.log(action.payload)
            state = state.concat(action.payload);
            break;
    }
    return state;
};