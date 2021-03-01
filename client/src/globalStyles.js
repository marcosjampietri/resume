import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` {
	
	html{

		background-color: hsla(263, 39%, 10.5%, 1);
		
		color: hsla(263, 39%, 10.5%, 1);
		

	* {
		padding: 0;
		margin: 0;
		font-family: Arial  ;
		font-weight: 100;
		letter-spacing: 0.18em;
		line-height: 1.8;
		text-decoration: none;
		list-style: none;
	}

	a {

		color: white;
		
	}


	
}`;

export const Htxt = createGlobalStyle` {
	
 h1 h2 h3 {

	color:hsla(165, 100%, 70%, 1.0);
 }
	
}`;
