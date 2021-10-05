import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "reactstrap";
import axios from "axios";
import styles from "./styles"
import {CardMedia, CardActions, CardContent, Typography} from "@material-ui/core";
import {postsFilterService} from "../../services/postsFilterService";
import BlogCardDialog from "./BlogCardDialog";

const BlogCard = (props) => {
    const [posts, setPosts] = useState([])
    const [unchangedPosts, setUnchangedPosts] = useState([])
    const baseUrl = "https://6155a14993e3550017b08b1c.mockapi.io/posts";
    const [visible, setVisible] = useState(3)
    const [open, setOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    const classes = styles();

    useEffect(() => {
        setCurrentPost(posts[0])
        postsFilterService.getFilterKey().subscribe(filterKey => {
            if (filterKey) {
                setPosts(unchangedPosts.filter(p => p.title.toLowerCase().indexOf(filterKey["key"]) !== -1))
            }
        })
    }, [posts, unchangedPosts])

    const handleClickOpen = async (id) => {
        setCurrentPost(posts.find(p => p.id === id))
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
        let postIndex = posts.findIndex(p => p.id === currentPost.id)
        posts[postIndex] = currentPost
        setCurrentPost(null)
    };

    const handleEdit = async () => {
        await axios.put(`https://6155a14993e3550017b08b1c.mockapi.io/posts/${currentPost.id}`, currentPost)
            .then(() => handleClose())
            .catch((err) => {
                console.log(err)
            })
    }

    const getData = async () => {
        //https://6155a14993e3550017b08b1c.mockapi.io/posts
        //https://jsonplaceholder.typicode.com/posts
        await axios.get(baseUrl).then((res) => {
            const filteredData = res.data.filter((item) => item.delete === false);
            setPosts(filteredData)
            setUnchangedPosts(filteredData)
        })
    }

    const handleMore = () => {
        if (posts.length > visible) {
            setVisible(visible + 3)
        }
    }

    const handleDeleteItem = async (id) => {
        if (window.confirm("bunu silmek istediğinize emin misiniz ..?")) {
            const data = {
                "delete": "true"
            };
            await axios.put(`https://6155a14993e3550017b08b1c.mockapi.io/posts/${id} `, data)
                .then(() => getData())
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const valueChange = (e) => {
        setCurrentPost({...currentPost, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        getData().then()
    }, [])

    return (
        <div className="mt-3">
            <h3>{props.title}</h3>
            <Container>
                <Row>
                    {posts.slice(0, visible).map((post) => (
                        <Col xs={12} md={6} lg={4} xl={4} key={post.id} className="my-5">
                            <Card sx={{maxWidth: 345}} className={classes.card}>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    height="300"
                                    src={`https://picsum.photos/200/300?random=${post.id}`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="text-center">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className="text-center">
                                        {post.body}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.icons}>
                                    <img src="https://img.icons8.com/color/48/000000/edit--v3.png" alt="green iguana"
                                         className={classes.icon} onClick={() => handleClickOpen(post.id)}/>
                                    <img src="https://img.icons8.com/color/48/000000/filled-trash.png"
                                         alt="green iguana"
                                         className={classes.icon} onClick={() => handleDeleteItem(post.id)}/>

                                </CardActions>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div style={{textAlign: "center"}}>
                    <button type={"submit"} onClick={() => handleMore()}
                            style={{width: "100%", backgroundColor: "#d8c0f5"}}
                            className="btn  my-5 text-center pl-5">
                        Get more...
                    </button>
                </div>
                <div>
                    {currentPost && (
                        <BlogCardDialog open={open} currentPost={currentPost} handleClose={handleClose}
                                        handleEdit={handleEdit} valueChange={valueChange}/>
                    )}
                </div>
            </Container>
        </div>

    )
}
export default BlogCard;
