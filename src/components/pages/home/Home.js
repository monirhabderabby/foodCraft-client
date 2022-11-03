import React from "react";
import { Navbar } from "../../shared/navbar/Navbar";
import { Banner } from "../../sections/banner/Banner";

const Home = () => {
    return (
        <div className="bg-light-red w-full min-h-screen">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;
