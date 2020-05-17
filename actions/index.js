export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'
export function addDeck(data) {
    return {type: ADD_DECK, data}
}

export function deleteDeck(data) {
    return {type: ADD_DECK, data}
}

export function addCardsToDeck({deckName, card}) {

    return {
        type: ADD_CARD,
        payload: {
            deckName,
            card
        }

    }

}