import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios";
import styles from "./styles"
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import waveImg from "../../assets/img/cardImage.png";

const CategoryList = () => {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(3)
    const classes = styles();
    const handleMore = () => {
        if (posts.length > visible) {
            setVisible(visible + 3)
        }
    }
    useEffect(() => {
        async function getData() {

            const baseUrl = "https://jsonplaceholder.typicode.com/posts";
            await axios.get(baseUrl).then(res => setPosts(res.data))

        }

        getData();
    }, []);

    return (
        <div className="mt-3">
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={waveImg} title="Paella dish"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "center"}}>
                        Rümeysa YÜK
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        cons are also appropriate for toggle buttons that allow a single choice to be selected or
                        deselected.
                    </Typography>
                </CardContent>
            </Card>
            <ListGroup style={{marginTop: "4rem"}} className={classes.root}>
                {
                    posts.slice(0, visible).map(post => (
                            <ListGroupItem key={post.id}>{post.title.substring(0, 12)}</ListGroupItem>
                        )
                    )
                }
            </ListGroup>
            <div style={{textAlign:"center"}}>
                <button type={"submit"} onClick={() => handleMore()} className="btn btn-dark mt-5 ml-5 text-center">
                    Get more...
                </button>
            </div>

        </div>
    );
}

export default CategoryList;
