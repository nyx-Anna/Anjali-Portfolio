import netflix from "../assets/projects/netflix.png";
import movie from "../assets/projects/movie.png";
import task from "../assets/projects/task.png";
import weather from "../assets/projects/weather.png";
import tic from "../assets/projects/tictactoe.png";
import coming from "../assets/projects/comingsoon.png";

const projects = [
  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "Responsive Netflix clone featuring dynamic movie browsing, trailers, and a modern streaming interface powered by the TMDB API.",
    tech: ["React", "TMDB API", "CSS"],

    live: "https://netflix-clone-two-xi-90.vercel.app/",
    github: "https://github.com/nyx-Anna/netflix-clone",
  },

  {
    title: "Movie App",
    image: movie,
    description:
      "Search trending movies, explore ratings, and browse popular titles using the TMDB API in a responsive interface.",
    tech: ["React", "API", "JavaScript"],

    live: "https://nyx-anna.github.io/Movie-App/",
    github: "https://github.com/nyx-Anna/Movie-App",
  },

  {
    title: "Task Manager",
    image: task,
    description:
      "Organize daily tasks with create, update, delete, and local storage support in a clean productivity dashboard.",
    tech: ["JavaScript", "LocalStorage", "CSS"],

    live: "https://task-manager-rosy-pi.vercel.app/",
    github: "https://github.com/nyx-Anna/Task-Manager-",
  },

  {
    title: "Weather App",
    image: weather,
    description:
      "Real-time weather dashboard displaying temperature, humidity, wind speed, and forecasts using the OpenWeather API.",
    tech: ["React", "OpenWeather", "CSS"],

    live: "https://nyx-anna.github.io/Weather-App/",
    github: "https://github.com/nyx-Anna/Weather-App",
  },

  {
    title: "Tic Tac Toe",
    image: tic,
    description:
      "Classic Tic Tac Toe game featuring responsive gameplay, clean UI, and JavaScript-based game logic.",
    tech: ["HTML", "CSS", "JavaScript"],

    live: "https://nyx-anna.github.io/Tic-Tac-Toe-Game/",
    github: "https://github.com/nyx-Anna/Tic-Tac-Toe-Game",
  },

  {
    title: "Coming Soon",
    image: coming,
    description:
      "A real client website currently under development. It will be deployed here once completed and ready for production.",
    tech: ["React", "Tailwind", "Coming Soon"],

    live: "#",
    github: "#",
  },
];

export default projects;
