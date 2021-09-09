import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Spinner } from 'react-bootstrap'
import Pagination from '../Components/Pagination'
import Character from './Character'

const ListCharacters = () => {
    
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState('')
    const [count, setCount] = useState('')
    const [charactersPerPage] = useState(10)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://swapi.dev/api/people/?page=${page}&format=json`)
                .then(res => res.json())
                .then(data => {
                    setCount(data.count)
                    setCharacters(data.results)
                    setIsLoading(false)
                })
    }, [page])

    const paginate = (pageNumber) => setPage(pageNumber)

    return (
        <Container fluid className="mt-2">
            <Row className="justify-content-md-center">
                <Col xxl={2} xl={4} lg={4} md={6} sm={6} xs={12} className="mt-2">
                    <Pagination charactersPerPage={charactersPerPage} totalCharacters={count} paginate={paginate} />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {
                    isLoading ? (
                        <Spinner animation="border" variant="secondary" />
                    ): (
                        Object.values(characters).map((character, index) => (
                            <Character 
                                key={index}
                                birthday={character.birth_year}
                                eyes={character.eye_color}
                                films={character.films}
                                gender={character.gender}
                                hair={character.hair_color}
                                height={character.height}
                                homeworld={character.homeworld}
                                mass={character.mass}
                                name={character.name} 
                                skin={character.skin_color}
                                species={character.species}
                                starships={character.starships}
                                vehicles={character.vehicles}
                            />
                        ))
                    )
                }
            </Row>
        </Container>
    )
}

export default ListCharacters
