import { MainLayout } from "../../components/layout/main/mainLayout";
import "./indexPage.css"
import projectData from "../../components//projectCard/data/projectCards.json"
import ProjectCard from "../../components/projectCard/ProjectCard";

export const IndexPage = () => {
  return (
    <MainLayout>
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet libero nec ante sollicitudin fringilla.</p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
    <section className="intro">
      <div className="intro-content">
        <h2>Our Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu mattis ultricies, nisl libero euismod magna, vel luctus dui neque ac nunc.
        </p>
      </div>
    </section>
    <section className="projects">
        <h2>Our Projects</h2>
      <div className="projects-content">
        {projectData.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
        ))}
      </div>
    </section>
  </MainLayout>
  );
};
