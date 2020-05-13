import React from "react";
import styled, { keyframes, css } from "styled-components";

const fadeInAnimation = keyframes`
    from { 
        opacity: 0;
        -webkit-transform: translateY(50%);
        -moz-transform: translateY(50%);
        -ms-transform: translateY(50%);
        -o-transform: translateY(50%);
        transform: translateY(50%);
     }
    to   { 
        opacity: 0.5; 
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }
`;

let fadeInAnim = css`animation: 3s ${fadeInAnimation};`;

const PageTitleContainer = styled.div`
	position: absolute;
	font-size: 14.375em;
	${fadeInAnim};
	opacity: 0.5;
	left: 50vw;
	z-index: -1;
	height: 100vh;
	width: 100%;
	top: 0;
	display: flex;
	align-items: center;
`;

export default function PageTitle(props) {
	return <PageTitleContainer>{props.children}</PageTitleContainer>;
}
