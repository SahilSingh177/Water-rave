import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
export default function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <Cards />
            <Footer />
            </>
    );
}