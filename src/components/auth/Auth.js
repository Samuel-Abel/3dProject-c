import React from 'react'
import Signup from './Signup'
import { Container, Row, Col} from 'reactstrap'
import Login from './Login'
import Header from './Header'


const Auth = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col md='12'>
                    <Header />
                    </Col>
                </Row>
                <Row>
                    <Col md='6' className='m-auto'>
                        <Login updateToken={props.updateToken}/>
                    </Col>
                    </Row>
                <Row>
                    <Col md='12'>
                        <p>Don't have an account?
                        <Signup updateToken={props.updateToken}/>
                        </p>
                    </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Auth