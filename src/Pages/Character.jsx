import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Col, Spinner} from 'react-bootstrap'

const Character = ( props ) => {

    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const films = props.films

        const fetchURL = (url) => axios.get(url)

        const promise = films.map(fetchURL)
        const filmsArr = []

        Promise.all(promise)
            .then((data) => {
                setLoading(true)
                data.map(el => (
                    filmsArr.push(el.data)
                ))
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
            })

        setFilm(filmsArr)
           
    }, [props.films])

    return (
        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} className="mt-2">
                <Card>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle>Gender: {props.gender}</Card.Subtitle>
                        <Card.Subtitle>Height: {props.height}</Card.Subtitle>
                        <Card.Subtitle>Mass: {props.mass}</Card.Subtitle>
                        <Card.Subtitle>Skin Color: {props.skin}</Card.Subtitle>
                        <Card.Subtitle>Hair Color: {props.hair}</Card.Subtitle>
                        <Card.Subtitle>Eyes Color: {props.eyes}</Card.Subtitle>
                        <Card.Subtitle>Birthday: {props.birthday}</Card.Subtitle>
                        <Card.Subtitle>
                            Films: 
                            {
                                loading ? (
                                    <div className="justify-content-md-center">
                                        Loading...
                                    </div>
                                ): (
                                    <ul>
                                    {
                                        Object.values(film).map(elements => (
                                            <li>
                                                {elements.title}: {elements.opening_crawl}
                                            </li>
                                        ))
                                    }   
                                    </ul>
                                )
                                
                            }
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
        </Col>
    )
}

export default Character
