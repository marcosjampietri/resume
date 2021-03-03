import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../actions/buttonAction";
import { Link } from "react-router-dom";
import { below } from "../styles";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { HiOutlineX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    const dispatch = useDispatch();

    //dispatch buttons
    const ToggleNav = () => {
        dispatch(navAction());
    };

    const { NavOn } = useSelector((state) => state.nav);
    useEffect(() => {
        if (NavOn) {
            dispatch(navAction());
        }
    }, [dispatch]);

    //access rootReducer

    //Spring
    const navAnimation = useSpring({
        transform: NavOn ? "translate3d(0vw,0,0) " : "translate3d(100%,0,0)",
    });

    //component
    return (
        <Block>
            <Grid>
                <Logo>
                    <Link as='a' to='/'>
                        <img
                            src='./Images/Icons/MJ(LOGO).svg'
                            alt='logo'
                            height='100%'
                        />
                    </Link>
                </Logo>

                <Main>
                    <Link to='/'>ABOUT ME</Link>
                    <Link to='/works'>PORTFOLIO</Link>
                    <Link to='/contact'>CONTACT</Link>
                </Main>

                <Mainsmall style={navAnimation}>
                    <Link to='/'>ABOUT ME</Link>
                    <Link to='/works'>PORTFOLIO</Link>
                    <Link to='/contact'>CONTACT</Link>
                </Mainsmall>

                <Push onClick={ToggleNav} NavOn={NavOn}>
                    {NavOn ? <HiOutlineX /> : <GiHamburgerMenu />}
                </Push>
            </Grid>
        </Block>
    );
};

export default NavBar;

//style------------------------------------------------------------------

const Block = styled(animated.div)`
    position: fixed;
    z-index: 5;

    width: 100%;
    height: 120px;
`;
const Grid = styled(animated.div)`
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, auto);

    background-color: hsla(263, 35%, 10.5%, 0.95);
`;
const Logo = styled(animated.button)`
    padding: 10px;
    height: 100px;
    justify-self: end;

    border: solid 0px;
    grid-row: 1;
    ${below.med`

       justify-self: start;
    margin-left: 10px;

     `}
    background-color: transparent;
    filter: hue-rotate(175deg) saturate(900%)
        drop-shadow(0px 0px 7px hsla(335, 100%, 50%, 0.6));
`;
const Main = styled(animated.div)`
    grid-column: 2;
    grid-row: 1;
    height: 100%;
    place-self: end;
    display: flex;
    align-items: center;
    a {
        padding: 20px;
        color: hsla(335, 100%, 50%, 1);
        transition: 0.8s;
        font-weight: 900;
        &:hover {
            color: hsla(335, 100%, 80%, 1);
            transition: 0.08s;
            cursor: pointer;
            transition: 0.08s;
            text-shadow: 0px 0px 25px hsla(335, 100%, 50%, 1);
        }
    }

    ${below.med`
    
           display: none;
         `};
`;
const Mainsmall = styled(animated.div)`
    display: none;
    height: 100vh;

    ${below.med`
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        position: absolute;
        right: 0px;
        top: 0px;
        
        a{
            color: hsla(15, 100%, 80%, 1);
            font-size: clamp(1.5rem, 2.5vw, 4rem);
            margin: 50px 0px;
        }
               
    `}

    background-image: linear-gradient(
        hsla(263, 100%, 15%, 1),
        hsla(0, 100%, 40%, 1),
        hsla(340, 90%, 50%, 1)
    );
`;
const Push = styled(animated.button)`
    ${below.med`
           display: block;
           grid-column: 3;
           justify-self: end;
         `}

    display: none;
    z-index: 8;
    margin: 10px;

    width: 70px;
    height: 70px;

    background-image: radial-gradient(hsl(0, 100%, 50%), hsl(335, 100%, 50%));
    border: solid 0px;
    border-radius: 5px;
    font-size: 3em;
`;
