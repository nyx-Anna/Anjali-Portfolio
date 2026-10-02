import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black section-space"
    >
      <div className="page-container">
        {/* Heading */}
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            My Projects
          </h2>

          <p className="text-gray-400 mt-6 mb-5 leading-8 text-center">
            A collection of projects that showcase my frontend development
            journey, problem-solving skills, and passion for building modern web
            applications.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className=" 
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          items-stretch
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
