import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: #AE00FF;
`;
//console.log(override);


const LoadingSpinner = ({color = "#FFFFFF", size=40}) => {
    return (
        <ClipLoader color={color} loading={true} css={override} size={size} />
    )
}

export default LoadingSpinner
