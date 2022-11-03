import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./components/pages/home/Home.js"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default App;
