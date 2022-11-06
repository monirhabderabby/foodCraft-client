import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { All } from "./components/sections/populerMenu/All";
import { Beverage } from "./components/sections/populerMenu/Beverage";
import { Breakfast } from "./components/sections/populerMenu/Breakfast";
import { Deserts } from "./components/sections/populerMenu/Deserts";
import { Dinner } from "./components/sections/populerMenu/Dinner";
import { Lunch } from "./components/sections/populerMenu/Lunch";
const Home = lazy(() => import("./components/pages/home/Home.js"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<All />} />
                <Route path="breakfast" element={<Breakfast />} />
                <Route path="lunch" element={<Lunch />} />
                <Route path="dinner" element={<Dinner />} />
                <Route path="deserts" element={<Deserts />} />
                <Route path="beverage" element={<Beverage />} />
            </Route>
        </Routes>
    );
}

export default App;
