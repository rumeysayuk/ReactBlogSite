import Header from "./components/Header/Header";
import CategoryList from "./components/Category/CategoryList";
import {Col, Container, Row} from "reactstrap"
import Footer from "./components/Footer/Footer";
import BlogCard from "./components/BlogCards/BlogCard";
// import ProductList from "./components/Product/ProductList";
function App() {
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col xs={3}> <CategoryList/></Col>
                    <Col xs={9}> <BlogCard/></Col>
                    {/*<Col xs={9}> <ProductList/></Col>*/}
                </Row>
            </Container>
            <Footer/>
        </>

    );
}

export default App;
