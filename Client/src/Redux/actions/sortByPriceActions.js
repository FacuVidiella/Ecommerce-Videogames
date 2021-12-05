export const SORT_BY_PRICE = "SORT_BY_PRICE"

export function sortByPrice(payload) {
    return {
        type: SORT_BY_PRICE,
        payload,
    };
}