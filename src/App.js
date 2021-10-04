import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogCard from "./components/BlogCards/BlogCard";

function App() {
    return (
        <div style={{background: "#d8c0f5", margin: 0, padding: 0}}>
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
    );
}

export default App;
