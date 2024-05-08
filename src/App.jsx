import {Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import { IndexPage } from "./pages/indexPage/IndexPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { MainLayout } from "./components/layout/main/mainLayout";

function App() {
const location = useLocation()
const {pathname} = location
const currentPage = pathname.slice(1)
  return (
    <>
    {/* Router has been moved to main.jsx. Meaning it wraps around the whole App component */}
        <Header />


        <MainLayout className={`${currentPage? currentPage : "index"}-page`}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
        <Footer />
    </>
  );
}

export default App;
