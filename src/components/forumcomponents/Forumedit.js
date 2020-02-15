import React, { useState } from 'react'
import {Label,Input,FormGroup,Button, Modal, ModalHeader, ModalBody, Form, ButtonToggle} from 'reactstrap'
import APIURL from '../../helpers/environment'

const ForumEdit = (props) => {
    
    const [editDesc, setEditDesc] = useState(props.postsToUpdate.description);
    const [editName, setEditName] = useState(props.postsToUpdate.name);
    const [editDim, setEditDimensions] = useState(props.postsToUpdate.dimensions);

    const updateCurrent = (event) => {
        event.preventDefault()
        fetch (`${APIURL}/api/forum/post/update${props.postsToUpdate.id}`,{
        method: "PUT",
        headers: new Headers ({
            "Content-Type": 'application/json',
            "Authorization": props.token
        }),
        body: JSON.stringify({forum: { description: editDesc, dimensions: editDim, name: editName }})
    }).then( res=> {props.fetchPosts(); props.updateOff() })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Make a Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={updateCurrent}>
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Edit Description:</Label>
                        <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="dimensions">Edit Dimensions:</Label>
                        <Input name="dimensions" value={editDim} onChange={(e) => setEditDimensions(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Update the Post!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ForumEdit