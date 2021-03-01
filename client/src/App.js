import React from "react";
import NavBar from "./components/navComponent";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import { GlobalStyles } from "./globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

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

    return transitions.map(({ item: location, props, key }) => (
        <>
            <GlobalStyles />
            <NavBar />

            <GitTab
                href='https://github.com/marcosjampietri/portfolio'
                target='_blank'
            >
                <img
                    src='./Images/Icons/git.svg'
                    atl='icon'
                    height='30px'
                    width='30px'
                />
                <h6>Check out the code on Github </h6>
            </GitTab>
            <MJApp key={location.pathname} style={props}>
                <Switch location={location}>
                    <Route path='/' exact component={Home} />
                    <Route path='/works' component={Works} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </MJApp>
        </>
    ));
}

const MJApp = styled(animated.div)`
    position: relative;
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
