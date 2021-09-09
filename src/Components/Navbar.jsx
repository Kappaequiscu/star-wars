import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: gray;
`

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const Center = styled.div`
    flex: 3;   
    text-align: center; 
`
const Logo = styled.h1`
    font-weight: bold;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Center>
                    <Logo>STAR WARS API.</Logo>
                </Center>
            </Wrapper>
        </Container>
    )
}

export default Navbar
