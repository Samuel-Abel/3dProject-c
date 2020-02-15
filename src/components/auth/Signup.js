import React, {useState} from 'react';
import './Signup.css'
import {Modal, ModalHeader, Form, FormGroup, Label, Input, Button, ModalBody} from 'reactstrap';

function Signup(props){
    let [username, setUsername] = useState('username')
    let [password, setPassword] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://4000/api/user/createuser', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({user: {username: username, password: password}})
        }).then((res) => res.json())
        .then( user => {
          props.updateToken(user.sessionToken)
        })
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

   return(
     <div>
       <Button color='danger' onClick={toggle}>SignUp</Button>
       <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>SignUp</ModalHeader>
    <ModalBody>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input onChange={(e)=> {setUsername(e.target.value); console.log(e.target.value)}} type='username' name="username" value={username} placeholder='username'/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input onChange={(e)=> {setPassword(e.target.value); console.log(e.target.value)}} type="password" name="password" value={password} placeholder='password' minLength='5'/>
      </FormGroup>
      <Button type="submit">Signup</Button>
    </Form>
    </ModalBody>
    </Modal>
    </div>
   )
}


export default Signup