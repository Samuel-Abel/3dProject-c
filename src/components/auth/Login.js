import React, {useState} from 'react'
import './Login.css'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

function Login(props){
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault() 
        fetch('http://localhost:4000/api/user/signin', {
            method: 'POST',
            body: JSON.stringify(
                {
                user:{
                 username: username,
                 password: password
                }}
                ),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
        .then(user=>props.updateToken(user.sessionToken))
    }
return(
    <div class='logincontainer'>
 <h4 class='login'>Login</h4>
 <Form onSubmit={handleSubmit}>
   <FormGroup>
     <Label htmlFor="username" className='loginInput'>Username</Label>
     <Input onChange={(e)=> {setUsername(e.target.value)}} placeholder="username" name='username' value={username} />
   </FormGroup>
   <FormGroup>
     <Label htmlFor="password" className='passwordd'>Password</Label>
     <Input onChange={(e)=> {setPassword(e.target.value)}} type="password" placeholder='password' name="password" value={password} />
   </FormGroup>
   <Button type="submit" color='primary'>Login</Button>
 </Form>
</div>
)
}

export default Login;