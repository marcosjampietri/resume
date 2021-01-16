import React, { useEffect } from 'react';
import { overAction } from '../actions/overAction';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'




const Home = () => {

	//dispatch Action
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(overAction())
    }, [dispatch]);


    //access rootReducer
    const { experiences, isLoding } = useSelector(state => state.overview) // console.log(experiences)

    //Spring
    const fadeIn = useSpring({
    	to: async (next, cancel) => {
    		await next({opacity: 0, color: '#ffaaee'})
    		await next({opacity: 1, color: 'rgb(44,56,59)'})
    	},
    	from: {opacity: 0, color: 'red'}
    });


    //buttons
    const nextExp = () => {
        console.log('olaaar')
    }
    const prevExp = () => {
        console.log('Aooo bobiiinaaa')
    }


    //component
    return (
        <>
        {!isLoding && (
            <Page >
                <Exp>
                    <h2></h2>
                </Exp>
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
                        <BtnP onClick={prevExp}>previous</BtnP>
                        <BtnN onClick={nextExp}>next-exp</BtnN>
                    </Exp>
                ))}
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
    max-width: 568px ;
    grid-template-columns:  1fr;
    justify-content: center;
    background-color: hsla(240, 30%, 50%, .5);


}`;


const Btn = styled(animated.button)`{
   
    grid-row: 5 ;
    grid-column: 1 ;
    background-color: hsla(240, 40%, 50%, .5);

}`;


const BtnP = styled(Btn)`{

    justify-self: start ;

}`;


const BtnN = styled(Btn)`{

    justify-self: end ;    

}`;








