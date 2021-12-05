import { Rating, RatingView } from 'react-simple-star-rating'
import styled from 'styled-components'

export const StyledRating = styled(Rating)`
    display: block;
    margin: 1em 0;


    & span svg path, span svg,span  {
        width: 30px !important; ; 
        height: 40px;

    }
`

export const StyledRatingView = styled(RatingView)`
    display: block;
    margin: 1em 0;


    & span svg path, span svg,span  {
        width: 30px !important; ; 
        height: 40px;

    }
`


