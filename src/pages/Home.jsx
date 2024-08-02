import Navbar from '../components/navbar/Navbar.jsx'
import Footer from "../components/footer/footer.jsx";
import Hero from '../components/home/Hero.jsx'
import NewArticle from "../components/home/NewArticle.jsx";

function Home() {
    return (
        <div className="flex flex-col">
            <Navbar/>
            <Hero />
            <NewArticle />
            <Footer/>
        </div>
    )
}

export default Home
