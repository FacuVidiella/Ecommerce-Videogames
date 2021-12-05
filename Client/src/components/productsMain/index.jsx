
import ProductCard from "../productCard"
import { useTransition, animated } from 'react-spring'
import { useSelector } from "react-redux";
import { MainCards } from "../styles/styled_productsMain/styledProductsMain";
import { PagingButton } from "../styles/styled_button_scrolling/styledButtonPages";
import { PageNumber } from "../styles/styled_page_number/styled_page_number";
import StyledButton from "../styles/styled_button/styledButton";
import SortBy from "../SortBy";
import StyledSortAndCards from "../styles/styled_sortAndCards/sytyledSortAndCards";


export default function ProductsMain({ setGame, game, setPrice, currentPage, setCurrentPage }) {

    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    let Scroll = require('react-scroll');
    let Element = Scroll.Element;
    let scroller = Scroll.scroller;
    const games = useSelector((state) => state.rootReducer.games);
    const gamesPerPage = 6;
    let finalGameIndex = currentPage * gamesPerPage;
    let indexOfFirst = finalGameIndex - gamesPerPage;
    const currentGames = games.slice(indexOfFirst, finalGameIndex);
    const maxPages = Math.ceil(games.length / gamesPerPage);
    const pages = [];
    for (let i = 1; i <= maxPages; i++) {
        pages.push(i);
    }


    const transition = useTransition(true, {
        from: { opacity: 0, y: '-10px' },
        enter: { opacity: 1, y: '0px' },
        leave: { opacity: 0, y: '-10px' },
        delay: 400,
        config: { duration: 800 }
    })

    const handleClick = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case 'right':
                setCurrentPage(currentPage + 1)
                break;
            case 'left':
                setCurrentPage(currentPage - 1)
                break;
            default:
                return null;
        }
        scroller.scrollTo('scrollHere', {
            duration: 100,
            smooth: 'easeInOutQuint',
        })

    }

    const paginado = (pages) => {
        setCurrentPage(pages)
        scroller.scrollTo('scrollHere', {
            duration: 100,
            smooth: 'easeInOutQuint',
        })
    }

    return (
        <>
            <Element name='scrollHere'>
                <StyledSortAndCards className="sortAndCards" >
                    <SortBy />
                    <MainCards>
                        {transition((style, item) => item ? currentGames.length > 0 ? currentGames.map(e =>
                            <animated.div style={style}>
                                <ProductCard setPrice={setPrice} game={game} setGame={setGame} key={e.id} p={e} />
                            </animated.div>)
                            : 'Not found' : '')}
                    </MainCards>
                </StyledSortAndCards>
                {< PagingButton >
                    {currentPage > 1 && <button className='leftButton' name='left' onClick={(e) => handleClick(e)}> ◄ </button>}
                    <PageNumber>
                        {pages && pages.map(e => (
                            <div key={e}>
                                {currentPage === e ? <StyledButton style={{ backgroundColor: 'whitesmoke', color: 'black' }} onClick={() => paginado(e)}>{e}</StyledButton> :
                                    <StyledButton onClick={() => paginado(e)}>{e}</StyledButton>}
                            </div>
                        ))}
                    </PageNumber>
                    {currentPage < maxPages && <button className='rightButton' name='right' onClick={(e) => handleClick(e)} > ► </button>}
                </PagingButton>}
            </Element>
        </>
    )
}