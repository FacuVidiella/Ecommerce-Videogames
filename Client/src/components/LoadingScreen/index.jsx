import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledLoadingScreen } from '../styles/styled_loadingScreen/styledLoading';
import { animated, useTransition } from 'react-spring';
import ReactLoading from "react-loading";
import theme from '../styles/theme';



function Wrapper({ children }) {
    const {
        isLoading,
        error,
    } = useAuth0();

    const transition = useTransition(isLoading, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const transitionMain = useTransition(!isLoading, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 800 }
    })

    if (isLoading) {
        return transition((style, bool) => bool &&
            < animated.div style={style} >
                <StyledLoadingScreen>
                    <div>
                        <h1>Loading</h1>
                        <ReactLoading type='cubes' className='loading' color={theme.colors.mainGreen} />
                    </div>
                </StyledLoadingScreen>
            </animated.div >)
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    return transitionMain((style, bool) => bool &&
        < animated.div style={style} >
            {children}
        </animated.div >)
}
export default Wrapper;
