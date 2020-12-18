import Banner from "./components/Banner";
import Contact from "./components/contact/Contact";
import Copyright from "./components/Copyright";
import Experiences from "./components/Experiences";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PortFolio from "./components/portfolio/PortFolio";

const App = () => {
    return (
        <>
            <Navbar />

            <main>

                <Banner />
                <PortFolio />
                <Experiences />
                <Contact />

            </main>

            <Footer />
            <Copyright />
        </>
    )
}

export default App;
