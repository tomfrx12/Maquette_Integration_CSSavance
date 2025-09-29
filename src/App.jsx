import { BrowserRouter as Router, Routes, Route } from "react-router";

import Layout from './components/Layout'

import Index from "./pages/index";
import Relocation from "./pages/relocation";
import Contact from "./pages/contact";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Index />}/>
                    <Route path="/relocation" element={<Relocation />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>     
            </Layout>
        </Router>
    )
}

export default App
