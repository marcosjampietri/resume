import React, { useEffect } from 'react';
import { overAction } from '../actions/overAction';
import { prevAction, nextAction } from '../actions/buttonAction';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'





const Home = () => {

	//dispatch Action
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(overAction())
    }, [dispatch]);

    //dispatch buttons
    const nextExp = () => {
        dispatch(nextAction())
    }
    const prevExp = () => {
        dispatch(prevAction())
    }


    //access rootReducer
    const { experiences, isLoding, itemNum } = useSelector(state => state.overview) // console.log(experiences)

    //Spring
    const fadeIn = useSpring({
    	to: async (next, cancel) => {
    		await next({opacity: 0, color: '#ffaaee'})
    		await next({opacity: 1, color: 'rgb(44,56,59)'})
    	},
    	from: {opacity: 0, color: 'red'}
    });



    const expIndex = itemNum % experiences.length;

    //component
    return (
        <>
        {!isLoding && (
            <Page >                
                {experiences.map( (item) => (
                    <Exp style={fadeIn} key={item._id} >
                        <h2>{item.position}</h2>
                        <h3>{item.institution}</h3>
                        <ul>
                            {item.role.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))}
                        </ul>
                        <h3>{item.year}</h3>
                    </Exp>
                ))[expIndex]}
                        <BtnP onClick={prevExp}>previous</BtnP>
                        <BtnN onClick={nextExp}>next-exp</BtnN>
            </Page>
        )}
        </>
    )
};

export default Home;


//style------------------------------------------------------------------


const Page = styled(animated.div)`{

	background-color: hsla(240, 30%, 80%, .5);
    display: grid;
    justify-content: center;
    gap: 20px;


}`;

const Exp = styled(animated.div)`{

    padding: 30px;
    display: grid;
    max-width: 368px ;
    grid-template-columns:  1fr;
    justify-content: center;
    background-color: hsla(240, 30%, 50%, .05);


}`;


const Btn = styled(animated.button)`{
   
    grid-row: 5 ;
    grid-column: 1 ;
    background-color: hsla(240, 40%, 50%, .75);

}`;


const BtnP = styled(Btn)`{

    justify-self: start ;

}`;


const BtnN = styled(Btn)`{

    justify-self: end ;    

}`;








