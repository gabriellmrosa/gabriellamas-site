import Container from "./style";
import Project from "./Project";
import projectsJson from "./projects.json";

function Projects({ topDistance }) {
  const { projects } = projectsJson;
  return (
    <Container topDistance={topDistance}>
      {projects.map((project) => (
        <Project
          href={project.href}
          key={project.title}
          logo={project.logo}
          bgLogoColor={project.bgLogoColor}
          title={project.title}
          description={project.description}
        />
      ))}
    </Container>
  );
}

export default Projects;
