import React from "react";
import styled from "styled-components";

export const ClickableGlobe = styled.div`
    // background-color: red;
    // opacity: 0.5;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    width: 420px;
    height: 420px;
    border-radius: 999px;
    z-index: 999999; !imprortant;
    @media (max-width: 768px) {
        width: 420px;
        height: 420px;
	}
`;

function ClickGlobe(props) {
	const { globeClicked } = props;

	return <ClickableGlobe onClick={(e) => globeClicked()} />;
}

export default ClickGlobe;
