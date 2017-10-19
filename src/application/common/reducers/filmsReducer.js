const INITIAL_STATE = {

    /// search page

    items: [],

    itemsLoaded: false,
    itemsLoading: false,
    itemsNotLoaded: false,

    /// details page

    currentItem: {},

    currentItemLoaded: false,
    currentItemLoading: false,
    currentItemNotLoaded: false,

    relatedItems: [],

    relatedItemsLoaded: false,
    relatedItemsLoading: false,
    relatedItemsNotLoaded: false,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {


        /// search page

        case 'LOAD_FILMS_PENDING': {
            return {
                ...state,
                itemsLoading: true
            };
        }

        case 'LOAD_FILMS_FULFILLED': {
            return {
                ...state,

                items: action.payload,

                itemsLoaded: true,
                itemsLoading: false,
                itemsNotLoaded: false,
            };
        }

        case 'LOAD_FILMS_REJECTED': {
            return {
                ...state,

                items: [],

                itemsLoaded: false,
                itemsLoading: false,
                itemsNotLoaded: true,
            };
        }

        /// details page

        case 'LOAD_FILM_PENDING': {
            return {
                ...state,
                currentItemLoading: true,
            };
        }

        case 'LOAD_FILM_FULFILLED': {
            return {
                ...state,

                currentItem: action.payload,

                currentItemLoaded: true,
                currentItemLoading: false,
                currentItemNotLoaded: false,
            };
        }

        case 'LOAD_FILM_REJECTED': {
            return {
                ...state,

                currentItem: {},

                currentItemLoaded: false,
                currentItemLoading: false,
                currentItemNotLoaded: true
            };
        }

        case 'LOAD_RELATED_FILMS_PENDING': {
            return {
                ...state,
                relatedItemsLoading: true
            };
        }

        case 'LOAD_RELATED_FILMS_FULFILLED': {
            return {
                ...state,

                relatedItems: action.payload,

                relatedItemsLoaded: true,
                relatedItemsLoading: false,
                relatedItemsNotLoaded: false,
            };
        }

        case 'LOAD_RELATED_FILMS_REJECTED': {
            return {
                ...state,

                relatedItems: action.payload,

                relatedItemsLoaded: true,
                relatedItemsLoading: false,
                relatedItemsNotLoaded: true,
            };
        }

    }

    return state;
}