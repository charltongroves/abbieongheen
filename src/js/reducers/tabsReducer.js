export default function reducer(state = {
    currentRoute: 0
}, action) {
    switch (action.type) {
        case "CHANGE_TAB": {
            return {...state, currentRoute: action.payload}
        }
    }
    return state
}