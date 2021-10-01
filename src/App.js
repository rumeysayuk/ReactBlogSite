import Navi from "./components/Navi/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Container, Row, Col} from "reactstrap"
//import CategoryList2 from "./components/CategoryList2";

function App() {
    let ProductInfo={title:"Product List"}
    let CategoryInfo={title:"Category List"}
    return (
        <div>
            <Container>
                <Row>
                    <Navi/>
                </Row>
                <Row>
                    <Col xs={3}> <CategoryList title={CategoryInfo.title}/></Col>
                    <Col xs={9}> <ProductList title={ProductInfo.title}/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
