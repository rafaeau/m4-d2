import { Container, Row, Col, Card } from 'react-bootstrap'
import books from '../data/history.json'

const LatestRelease = () => {
    return (
        <Container>
            <Row className="justify-content-around">
                {
                    books.map(book => (
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card key={book.asin} className="my-3 mx-3">
                                <Card.Img className="img-fluid w-100" variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title id='book-title'><small>{book.title}</small></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default LatestRelease