import React from "react";
import { Banner } from "../../sections/banner/Banner";
import { BestBlog } from "../../sections/best__blog/BestBlog";
import { Features } from "../../sections/featues/features";
import { PopulerMenu } from "../../sections/populerMenu/PopulerMenu";
import { Navbar } from "../../shared/navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="bg-light-red w-full min-h-screen">
                <Navbar />
                <Banner />
            </div>
            <BestBlog />
            <Features />
            <PopulerMenu />
        </>
    );
};

export default Home;
