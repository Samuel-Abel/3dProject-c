import React, {useState} from 'react'
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Col} from 'reactstrap'
import APIURL from '../../helpers/environment'

const ForumCreate= (props) => {
    let [name, setName] = useState('')
    let [dimensions, setDimensions] = useState('')
    let [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`${APIURL}/api/forum/post/create`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({forum: {name:name, description:description, dimensions:dimensions}})
        }).then(res => res.json())
        .then(forumData => {
            console.log(forumData)
            setName('')
            setDimensions('')
            setDescription('Time')
            props.fetchPosts()
        })
    }

const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

    return(
        <div>
            <Button color='danger' onClick={toggle}>Create Post</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Post</ModalHeader>
                <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input onChange={ (e) => {setName(e.target.value) } } name="name" value={name} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input name="description" onChange={ (e) => {setDescription(e.target.value) } }  value={description} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dimensions">Dimensions</Label>
                    <Input onChange={ (e) => {setDimensions(e.target.value) } } name="dimensions" value={dimensions}/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
            </ModalBody>
            </Modal>
        </div>
    )
}

export default ForumCreate