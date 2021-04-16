import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useSpring, useTransition } from "react-spring";
import styled from "styled-components";
import Footer from "./components/footComponent";
import NavBar from "./components/navComponent";
import { GlobalStyles } from "./globalStyles";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
    const location = useLocation();
    const transitions = useTransition(
        location,
        (location) => location.pathname,
        {
            from: {
                opacity: 0,
                transform: "translate3d(100%,0,0) scale(1)",
                position: "absolute",
            },
            enter: { opacity: 1, transform: "translate3d(0%,0,0) scale(1)" },
            leave: { opacity: 0, transform: "translate3d(0%,0,0) scale(0.5)" },
        }
    );

    //access rootReducer
    const { NavOn } = useSelector((state) => state.nav);
    const { isLoding } = useSelector((state) => state.overview);

    const blur = useSpring({
        opacity: NavOn ? "1" : "0",
    });

    return transitions.map(({ item: location, props, key }) => (
        <>
            <GlobalStyles />
            <NavBar />

            <GitTab
                href='https://github.com/marcosjampietri/resume'
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src='./Images/Icons/git.svg'
                    alt='icon'
                    height='30px'
                    width='30px'
                />
                <h6>Check out the code on Github </h6>
            </GitTab>
            <Blured style={blur} />
            <MJApp key={location.pathname} style={props}>
                <Switch location={location}>
                    {!isLoding && <Route path='/' exact component={Home} />}
                    {!isLoding && <Route path='/works' component={Works} />}
                    {!isLoding && <Route path='/contact' component={Contact} />}
                </Switch>
                <Footer />
            </MJApp>
        </>
    ));
}

const MJApp = styled(animated.div)`
    position: relative;
`;
const Blured = styled(animated.div)`
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: hsla(0, 100%, 100%, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
    pointer-events: none;
`;

const GitTab = styled(animated.a)`
    position: fixed;
    padding: 5px;
    top: 50vh;
    left: -108px;
    display: flex;
    transform: rotate(270deg);
    align-items: center;
    background-color: hsla(263, 10%, 50%, 0.3);
    transition: 1s;
    img {
        transition: 1s;
    }
    &:hover {
        transition: 0.2s;
        background-color: hsla(263, 10%, 100%, 0.85);
        color: black;
        img {
            transition: 0.2s;
            transform: rotate(90deg);
        }
    }
    h6 {
        padding: 5px 10px;
    }
    border-radius: 0px 0px 18px 18px;

    z-index: 10;
`;

export default App;
