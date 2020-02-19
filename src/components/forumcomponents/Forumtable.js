import React from 'react'
import './Forumtable.css'
import {Table, Button, ButtonGroup} from 'reactstrap'
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
      <tr key={index}>
        <th scope='row'>{forum.id}></th>
        <td>{forum.dimensions}</td>
        <td>{forum.description}</td>
        <td>{forum.name}</td>
        <td>
          <ButtonGroup>
          <Button color='warning' onClick={()=>{props.editUpdatePost(forum); props.updateOn() }}>Update</Button>
          <Button color='danger' onClick={()=>{deletePost(forum)}}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>   
      )
      }
    )
  }



    return(
        <>
        <h3 class='tablename'>Post History</h3>
        <hr />
        <Table striped class='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Dimensions</th>
              <th>Description</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {forumMapper()}
          </tbody>
        </Table>
        </>
    )
}


export default ForumTable