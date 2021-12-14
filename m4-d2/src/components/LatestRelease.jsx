import { Container, Row, Col, Card } from 'react-bootstrap'
import dishes from '../data/history.json'

const LatestRelease = () => {
    return (
        <Container>
            <Row className="justify-content-around">
                {/* <Col xs={12} md={6} lg={3}> */}
                    {
                        dishes.map(book => (
                            <Card key={book.asin} className="my-3 mx-3 col-6 col-md-3 col-lg-2">
                                <Card.Img className="img-fluid w-100" variant="top" src={book.img}/>
                                <Card.Body>
                                    <Card.Title id='book-title'><small>{book.title}</small></Card.Title>
                                </Card.Body>
                            </Card>
                        ))
                    }
                {/* </Col> */}
            </Row>
        </Container>
    )
}

export default LatestRelease