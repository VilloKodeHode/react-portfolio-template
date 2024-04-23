import { MainLayout } from "../../components/layout/main/mainLayout";
import "./aboutPage.css"

export const AboutPage = () => {
  return (
    <MainLayout className="about-page"> 
      <section className="hero">
      <div className="hero-content">
      <h1>Welcome to Our AboutPage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet libero nec ante sollicitudin fringilla.</p>
      <a href="#" className="btn">Learn More</a>
    </div>
      </section>
      <section className="intro"></section>
      <section className="projects"></section>
    </MainLayout>
  );
};
