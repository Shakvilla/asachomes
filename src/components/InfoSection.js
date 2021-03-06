import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const Section = styled.div`
width: 100%;
height: 100%;
padding: 4rem 0rem;

;`
const Container = styled.div`
display:grid;
padding: 3rem ;
grid-template-columns: 1fr 1fr;
grid-template-rows: 600px;

@media  screen and (max-width: 768px){

    grid-template-columns: 1fr;


}
@media  screen and (max-width: 668px){

    grid-template-rows: 700px;



}
`
const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1')};

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    
}

p{
    margin-bottom: 2rem;
}
`
const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){

    order: ${({ reverse }) => (reverse ? '2' : '1')};
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media screen and (max-width: 668px){
               margin-top: 9rem;
 
    }
}


`

const InfoSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image }) => {
    return (

        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/home' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='homes' />
                </ColumnRight>
            </Container>
        </Section>

    )
}


export default InfoSection
