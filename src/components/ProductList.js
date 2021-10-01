import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from "reactstrap";
import axios from "axios";

const ProductList = (props) => {
    const [posts, setPosts] = useState([])
    const baseUrl = "https://6155a14993e3550017b08b1c.mockapi.io/posts";
    const getData = async () => {
        //https://6155a14993e3550017b08b1c.mockapi.io/posts
        //https://jsonplaceholder.typicode.com/posts
        await axios.get(baseUrl).then((res) => {
            const filteredData = res.data.filter((item) => item.delete === false);
            setPosts(filteredData)
        })
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
    })
    return (
        <div className="mt-3 pl-4">
            <h3>{props.title}</h3>
            <Container>
                <Row>
                    {
                        posts.slice(0, 10).map((post) => (
                                <Col xs={12} md={6} lg={4} xl={3} key={post.id}>
                                    <Card>
                                        <CardImg top width="100%" src="https://picsum.photos/200/300" alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle tag="h5">{post.title}</CardTitle>
                                            <CardText> {post.body}</CardText>
                                            <Button className="text-center">Güncelle</Button>
                                            <Button className="text-center"
                                                    onClick={() => handleDeleteItem(post.id)}>Sil</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductList;
