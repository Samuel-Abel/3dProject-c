import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import ForumCreate from './Forumcreate'
import ForumTable from './Forumtable'
import ForumEdit from './Forumedit'
import Homepg from './ForumHome'
import APIURL from '../../helpers/environment'


const ForumIndex = (props) => {
    const[forums,setForums] = useState([]);
    const[updateActive, setUpdateActive] = useState(false);
    const[postsToUpdate, setPostsToUpdate] = useState({});

    const editUpdatePost = (forum) => {
    setPostsToUpdate(forum);
    console.log(forum);
    }
    
    const updateOn = () =>{
        setUpdateActive(true)
    }

    const updateOff = () =>{
        setUpdateActive(false)
    }

    const fetchPosts = () => {
        fetch(`${APIURL}/api/forum/getall`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(res => res.json())
        .then(forumData => {setForums(forumData); console.log(forumData)}) //
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const [sessiontoken] = useState(props.token);
    const [forumPage, setForumpage] = useState(true);

    let forumData = () =>{
        setForumpage(false)
    }

    return (
        !forumPage ? <Homepg token={sessiontoken}/> : 

        <Container>
            <Row>
                <Col md='12'>
                    <ForumCreate fetchPosts={fetchPosts} token={props.token} />
                    </Col>
                    </Row>
                    <Row>
                    <Col md='12'>
                        <ForumTable 
                        forums={forums} 
                        fetchPosts={fetchPosts} 
                        token={props.token}
                        editUpdatePost={editUpdatePost}
                        updateOn= {updateOn}/>
                    </Col>
                        {
                            updateActive ? 
                            <ForumEdit postsToUpdate={postsToUpdate} updateOff={updateOff} token={props.token} fetchPosts={fetchPosts} />
                            :
                            null
                        }
            </Row>
            <Row>
                <Col md='12'>
                <Button color='primary' type='submit' onClick={()=>forumData()}>Back Home</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ForumIndex