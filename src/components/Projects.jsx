import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      bg-black 
      pt-28
      overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-6 lg:pl-8">
        {/* Heading */}
        <div className="mb-24">
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
          items-center
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
