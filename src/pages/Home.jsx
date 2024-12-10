import Header from "../comp/Header"
import Main from "../comp/Main"
import Hero from "../comp/Hero"
import Drinks from "../comp/Drinks"
import Footer from "../comp/Footer"
import Component from "../comp/Sidebar"
import Stickyside from "../comp/Stickyside"


export default function Home() {



    return(
        <div>
            <Header />
            <Stickyside />
            <Main />
            <Component />
            <Hero />
            <Drinks />
            <Footer />

        </div>
    )
}