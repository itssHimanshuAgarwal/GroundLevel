import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

function InfoSection({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart,
    start
}) {
    return ( <>
        <
        InfoSec lightBg = { lightBg } >
        <
        Container >
        <
        InfoRow imgStart = { imgStart } >
        <
        InfoColumn >
        <
        TextWrapper >
        <
        Heading lightText = { lightText } > { headline } < /Heading>   <
        Subtitle lightTextDesc = { lightTextDesc } > { description } < /Subtitle>  <
        TopLine lightTopLine = { lightTopLine } > { topLine } < /TopLine> <
        Link to = '/sign-up' >
        <
        /
        Link > <
        /TextWrapper> < /
        InfoColumn > <
        InfoColumn >
        <
        ImgWrapper start = { start } >
        <
        Img src = { img }
        alt = { alt }
        /> < /
        ImgWrapper > <
        /InfoColumn> < /
        InfoRow > <
        /Container> < /
        InfoSec > <
        />
    );
}

export default InfoSection;