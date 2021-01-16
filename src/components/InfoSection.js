import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


const Section = styled.div``
const Container = styled.div``
const ColumnLeft = styled.div``
const ColumnRight = styled.div``


function InfoSection() {
    return (
        <div>

            <h1>Welcome to AsacHomes</h1>

            <Section>
                <Container>
                    <ColumnLeft>
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                        <Button to='/home'>label</Button>

                    </ColumnLeft>
                    <ColumnRight></ColumnRight>
                </Container>
            </Section>
        </div>
    )
}

export default InfoSection
