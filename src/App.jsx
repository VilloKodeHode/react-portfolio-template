import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import { IndexPage } from "./pages/indexPage/IndexPage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { MainLayout } from "./components/layout/main/mainLayout";

function App() {
  return (
    <>
      <Router>
        <Header />
        <MainLayout className="index-page">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
        <Footer />
      </Router>
    </>
  );
}

export default App;
