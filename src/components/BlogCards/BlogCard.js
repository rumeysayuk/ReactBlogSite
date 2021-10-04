import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "reactstrap";
import axios from "axios";
import Draggable from "react-draggable";
import {Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from "@material-ui/core";

const BlogCard = (props) => {
    const [posts, setPosts] = useState([])
    const baseUrl = "https://6155a14993e3550017b08b1c.mockapi.io/posts";
    const [visible, setVisible] = useState(4)
    const [open, setOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState(false);

    const handleClickOpen = async (id) => {
        setCurrentPost(posts.find(p => p.id === id))
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const handleEdit = async () => {
        await axios.put(`https://6155a14993e3550017b08b1c.mockapi.io/posts/${currentPost.id}`, currentPost)
            .then(() => handleClose())
            .catch((err) => {
                console.log(err)
            })
    }

    function PaperComponent(props) {
        return (
            <Draggable>
                <Paper {...props} />
            </Draggable>
        );
    }

    const getData = async () => {
        //https://6155a14993e3550017b08b1c.mockapi.io/posts
        //https://jsonplaceholder.typicode.com/posts
        await axios.get(baseUrl).then((res) => {
            const filteredData = res.data.filter((item) => item.delete === false);
            setPosts(filteredData)
        })
    }
    const handleMore = () => {
        if (posts.length > visible) {
            setVisible(visible + 3)
        }
    }
    const handleDeleteItem = async (id) => {
        const data = {
            "delete": "true"
        };
        await axios.put(`https://6155a14993e3550017b08b1c.mockapi.io/posts/${id} `, data)
            .then(() => getData())
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="mt-3 pl-4">
            <h3>{props.title}</h3>
            <Container>
                <Row>
                    {posts.slice(0, visible).map((post) => (
                        <Col xs={12} md={6} lg={4} xl={6} key={post.id}>
                            <Card>
                                <CardImg top width="100%" src={`https://picsum.photos/200/300?random=${post.id}`}
                                         alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle tag="h5">{post.title}</CardTitle>
                                    <CardText> {post.body}</CardText>
                                    <Button className="text-center"
                                            onClick={() => handleClickOpen(post.id)}>Güncelle</Button>
                                    <Button className="text-center"
                                            onClick={() => handleDeleteItem(post.id)}>Sil</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <button type={"submit"} onClick={() => handleMore()} className="btn btn-dark mt-5 text-center pl-5">
                    Get more...
                </button>
                <div>
                    <Dialog open={open} onClose={() => handleClose()} PaperComponent={PaperComponent}
                            aria-labelledby="draggable-dialog-title">
                        <DialogTitle id="draggable-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Change my info...</DialogContentText>
                            <TextField margin="dense" name="title" label="Title" type="text" fullWidth
                                       value={currentPost.title}

                                       onChange={({target: {value}}) => currentPost.title = value}/>
                            <TextField margin="dense" name="body" label="Body" type="text" fullWidth
                                       value={currentPost.body}
                                       onChange={({target: {value}}) => currentPost.body = value}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => handleClose()} color="primary">Close</Button>
                            <Button onClick={() => handleEdit()} color="primary">Güncelle</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </div>

    )
}
export default BlogCard;
