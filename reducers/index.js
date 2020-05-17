import {ADD_DECK, ADD_CARD, DELETE_DECK} from './../actions'

export default function entries(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                ...action.data
            }
        case ADD_CARD:
            let deck = state[action.payload.deckName];
            deck
                .questions
                .push(action.payload.card);
            const final = Object.assign({}, state, deck);
            return Object.assign({}, state, {
                [action.payload.deckName]: deck
            })

        case DELETE_DECK:
            delete state[action.deckname];
            return state;
        default:
            return state

    }

}