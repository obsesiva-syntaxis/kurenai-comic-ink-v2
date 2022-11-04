import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Concurso from "../pages/Concurso";
import Shop from "../pages/Shop";
import Tattoo from "../pages/Tattoo";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={ <Tattoo /> } />
                    <Route path="/shop" element={ <Shop /> } />
                    <Route path="/contest" element={ <Concurso /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
