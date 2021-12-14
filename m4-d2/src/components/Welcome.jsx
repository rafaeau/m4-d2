import { Container } from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container>
            <div className="jumbotron mt-4 bg-light">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </div>
        </Container>
    )
}

export default Welcome