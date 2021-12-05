import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import StyledButton from "../styles/styled_button/styledButton";
import StyledSort from '../styles/styled_sort/styledSort';
import { filteByDesAsc } from "../../Redux/actions/sortByAbcActions";
import {sortByPrice } from "../../Redux/actions/sortByPriceActions";
import { getProducts } from '../../Redux/actions/productsActions';

const options = ['Alphabetical order: A-Z', 'Alphabetical order: Z-A', 'Price: Max to Min', 'Price: Min to Max'];

export default function SortBy() {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [active, setActive] = React.useState("")

    useEffect(()=>{
        console.log(active)
    },[active])

    const handleMenuItemClick = (event, index) => {
        console.log(event)
        setSelectedIndex(index);
        if (event.target.innerText === 'Alphabetical order: A-Z') {
            dispatch(filteByDesAsc("az"))
            setActive(event.target.innerText);
            console.log(active)
        } else if (event.target.innerText === 'Alphabetical order: Z-A') {
            dispatch(filteByDesAsc("za"))
            setActive(event.target.innerText);
        } else if (event.target.innerText === 'Price: Max to Min') {
            dispatch(sortByPrice("max"))
            setActive(event.target.innerText);
        } else if (event.target.innerText === 'Price: Min to Max') {
            dispatch(sortByPrice("min"))
            setActive(event.target.innerText);
        } else if (event.target.innerText === 'Reset') {
            dispatch(getProducts("All Categories"))
            setActive("");
        }
    };

    return (
            <StyledSort>
                    {options.map((option, index) => (
                        <div
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            
                        >
                            <p className = {active === option? "active": ""}>{option}</p>
                        </div>
                    ))}
                    <div> 
                        <p onClick={(event) => handleMenuItemClick(event)}> Reset </p>
                    </div>
            </StyledSort>


    )
}

