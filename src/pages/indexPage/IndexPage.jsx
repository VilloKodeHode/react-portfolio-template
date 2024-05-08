import "./indexPage.css";
import projectData from "../../components/projectCard/data/projectCards.json";
import ProjectCard from "../../components/projectCard/ProjectCard";
import IndexHeroSection from "./sections/IndexHeroSection";
import { IndexAboutSection } from "./sections/IndexAboutSection";

export const IndexPage = () => {
  return (
   <>
      <IndexHeroSection />
      <IndexAboutSection />
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="projects-content">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              href={project.href}
            />
          ))}
        </div>
      </section>
</>
  );
};
