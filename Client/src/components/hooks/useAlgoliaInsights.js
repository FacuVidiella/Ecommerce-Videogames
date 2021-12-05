import si from 'search-insights';

const VITE_ALGOLIA_APP_ID='5I8M8W3DCC'
const VITE_ALGOLIA_API_KEY='26a11d633bd52d1047e86b47e6c285ba'
const VITE_ALGOLIA_APP_INDEX_NAME='EcommerceGames'

si ('init', {
    appId: VITE_ALGOLIA_APP_ID,
    apiKey: VITE_ALGOLIA_API_KEY,
    useCookie: true
});

export default function useAlgoliaInsights () {
    const sendProductAddedToCart = objectID => {
        si('convertedObjectIDs', {
            index: VITE_ALGOLIA_APP_INDEX_NAME,
            eventName: 'Product added to cart',
            objectIDs:[String(objectID)]
        })
    }
    const sendProductView = objectID => {
        si('viewedObjectIDs', {
            index: VITE_ALGOLIA_APP_INDEX_NAME,
            eventName: 'Product viewed',
            objectIDs:[String(objectID)]
        })
    }
    return {
        sendProductAddedToCart,
        sendProductView
    }
}