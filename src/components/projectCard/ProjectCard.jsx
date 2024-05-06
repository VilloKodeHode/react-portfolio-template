import './projectCard.css';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <>
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;