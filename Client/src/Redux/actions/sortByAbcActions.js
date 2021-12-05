export const FILTER_BY_NAME = 'FILTER_BY_NAME'

export function filteByDesAsc(type){
    return{
        type: FILTER_BY_NAME,
        payload:type
    }
}