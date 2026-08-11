function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      flex
      flex-col
      h-full
      bg-[#111]
      border border-violet-500/20
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-3
      hover:scale-[1.02]
      hover:border-violet-500
      hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-52
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />
        {/* Image transition on hover */}
        <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/60
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-3 leading-7 min-h-[90px]">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-3 mt-5 min-h-[72px] content-start">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
              px-2.5
              py-1
              rounded-full
              text-xs
              font-medium
              border
              border-violet-500/40
              text-violet-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-4 pt-7">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            text-center
            py-3
            rounded-full
            bg-violet-600
            text-white
            font-semibold
            hover:bg-violet-500
            transition
            "
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            text-center
            py-3
            rounded-full
            border
            border-violet-500
            text-violet-300
            hover:bg-violet-500
            hover:text-white
            transition
            "
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;