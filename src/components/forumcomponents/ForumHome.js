import React, {useState} from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import ForumC from './Forumcaro'
import ForumIndex from './Forumindex'
import './ForumHome.css'


const Homepg = (props) => {

  const [sessiontoken] = useState(props.token);
  const [homePage, setHomepage] = useState(true);

  let forumTable = () =>{
    setHomepage(false)
  }



  return (

!homePage ? <ForumIndex token={sessiontoken}/> : 

    <div class='home'>
        <Row>
            <Col md='8' className='m-auto'>
            <ForumC/>
            </Col>
        </Row>
        <Row>
          <Col md='12' className='m-auto'>
      <Jumbotron>
        <h1 className="display-3">Willkommen meine Freundin!</h1>
        <p className="lead">Wir haben groS Idee fur du und dir dreiD printing.</p>
        <hr className="my-2" />
        <p>Habt ein gut Zeit!</p>
        <p className="lead">
          <Button color="primary"  type='submit' onClick={()=>forumTable()}>Forum</Button>
        </p>
      </Jumbotron>
      </Col>
      </Row>
    </div>
  );
};

export default Homepg;