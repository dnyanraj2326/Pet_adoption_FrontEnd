import { ADD_TO_FEVEROTE_PETS, REMOVE_TO_FEVEROTE_PETS } from "./actionType";


const initialState = []

export default reducer = (state=initialState,action) => {

    switch (action.type) {
        case ADD_TO_FEVEROTE_PETS:
            return[
                ...state,action.payload
            ]
        case REMOVE_TO_FEVEROTE_PETS:
            const filterPets = state.filter((item) => item.petName !== action.payload)
            return[
                ...filterPets
            ]
        default:
            return state
    }
    
}