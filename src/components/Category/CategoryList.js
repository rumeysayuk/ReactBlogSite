import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import axios from "axios";

const CategoryList = (props) => {
    const [posts, setPosts] = useState([])
    const [visible, setVisible] = useState(3)
    const handleMore = () => {
        if (posts.length > visible) {
            setVisible(visible+3)
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
            <h4>{props.title}</h4>
            <ListGroup>
                {
                    posts.slice(0, visible).map(post => (
                            <ListGroupItem key={post.id}>{post.title.substring(0, 12)}</ListGroupItem>
                        )
                    )
                }
            </ListGroup>
            <button type={"submit"} onClick={()=>handleMore()} className="btn btn-dark mt-5 text-center pl-5">
                Get more...
            </button>
        </div>
    );
}

export default CategoryList;
