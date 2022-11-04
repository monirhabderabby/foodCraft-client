import React from "react";
import { Banner } from "../../sections/banner/Banner";
import { BestBlog } from "../../sections/best__blog/BestBlog";
import { Navbar } from "../../shared/navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="bg-light-red w-full min-h-screen">
                <Navbar />
                <Banner />
            </div>
            <BestBlog />
        </>
    );
};

export default Home;
