import { ADD_TO_FEVEROTE_PETS, REMOVE_TO_FEVEROTE_PETS } from "./actionType"


export const addTOFevPets = (item) => {
    return{
        type:ADD_TO_FEVEROTE_PETS,
        payload:item
    }
}

export const removeTOFevPets = (item) => {
    return{
        type:REMOVE_TO_FEVEROTE_PETS,
        payload:item
    }
}
