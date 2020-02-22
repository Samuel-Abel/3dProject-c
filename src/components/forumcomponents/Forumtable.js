import React from 'react'
import './Forumtable.css'
import {Table, Button, ButtonGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck, Col, Row} from 'reactstrap'
import APIURL from '../../helpers/environment'

const ForumTable = (props) => {

  const deletePost = (forum) => {
    fetch(`${APIURL}/api/forum/post/delete/${forum.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(()=> props.fetchPosts())
  }




  const forumMapper = () =>{
    return props.forums.map(function(forum, index) {
      return(
      // <div key={index} className='cards'>
      <Col sm='4'>
        <Card key={index} className='cardBod'>
          <CardImg top width="100%"  style={{width:358, height:350}} src={forum.photo} alt=''/>
          <CardBody>
          <CardText>
        Dimensions:{forum.dimensions}
        <br></br>
        Description:{forum.description}
        <br></br>
        Name:{forum.name}
        <br></br>
          <ButtonGroup>
          <Button color='warning' onClick={()=>{props.editUpdatePost(forum); props.updateOn() }}>Update</Button>
          <Button color='danger' onClick={()=>{deletePost(forum)}}>Delete</Button>
          </ButtonGroup>
          </CardText>
          </CardBody>
          </Card>
          </Col>
        // </div>
      )
      }
    )
  }



    return(
        <Row>
          
            {forumMapper()}
            
        </Row>
    )
}


export default ForumTable