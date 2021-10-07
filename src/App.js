import React, {Suspense} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const BlogCard = React.lazy(() => import("./components/BlogCards/BlogCard"))

// import BlogCard from "./components/BlogCards/BlogCard";

function App() {
    return (
        <Suspense fallback={<div>Loading..</div>}>
            <div style={{background: "#ffffff", margin: 0, padding: 0}}>
                <header className="container">
                    <Header/>
                </header>
                <main className="container" style={{background: "#f1ecf5"}}>
                    <BlogCard/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Suspense>
    );
}

export default App;
