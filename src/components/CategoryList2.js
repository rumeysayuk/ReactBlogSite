import axios from "axios";
import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            url: "https://jsonplaceholder.typicode.com/posts",
            visible: 3,
        }
    }

    getData = async () => {
        await axios.get(this.state.url).then(res => this.setState({postList: res.data}))
        this.setState({
            list: this.state.postList
        });
    }

    loadMoreData = async () => {
        this.setState({
            visible: this.state.visible + 3
        })
    }

    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <ListGroup>
                    {
                        this.state.postList.slice(0, this.state.visible).map(post=>(
                            <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <button type={"submit"} onClick={this.loadMoreData} className="btn btn-dark mt-5 text-center pl-5">
                    Get more...
                </button>
            </div>
        );
    }
}

export default CategoryList2;
