import style from '../css/projectDisplay.module.css';
import PageDivider from './svg/PageDivider';
import teamProjectImage from '../images/teamProject.png';
import weatherApp from '../images/Responsive_Weather.png';
import taskManager from '../images/Responsive_taskmanager.png';
import sortingApp from '../images/sortingImg.png';
import portfolioSite from '../images/Responsive_portfolio.png';
import ProjectDisplay from './ProjectDisplay';

function ProjectDisplayWrapper() {
  return (
    <div className={style.projectDisplayWrapper}>
      <PageDivider flip={true} />
      <div className={style.title}>{'<Projects />'}</div>

      <ProjectDisplay
        img={teamProjectImage}
        title={'Food and Drink App'}
        text={[
          <div className={style.projectTextSection}>
            This is a team project I am currently working on in college. It recommends new foods and drinks fore users
            to try out based on their likes.
          </div>,
          <div className={style.projectTextSection}>
            The frontend was made with <b>React.js</b> and <b>TypeScript</b>, styled with <b>SASS</b>.
          </div>,
          <div className={style.projectTextSection}>
            We used <b>Node.js</b> and <b>express.js</b> to create out own <b>REST API</b> and we hosted a <b>MySQL</b>
            database using <b>Microsoft Azure</b>.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/team-project-module"
      />
      <ProjectDisplay
        img={weatherApp}
        title={'Weather App'}
        text={[
          <div className={style.projectTextSection}>
            Global weather application that allows the user to search for a specific city, country, etc and see the
            current weather information.
          </div>,
          <div className={style.projectTextSection}>
            Front end was made with <b>React.js</b>, styled with <b>SASS</b> and the graphing data was displayed using
            <b>Chart.js</b> and the public <b>REST API</b> OpenWeatherMap.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/weather-app"
        liveLink="https://evan-or.github.io/weather-app/"
      />
      <ProjectDisplay
        img={taskManager}
        title={'Task Management App'}
        text={[
          <div className={style.projectTextSection}>
            Task Management application that allows the user to create a list of tasks they need to complete. Each task
            can be customised to have an icon, colour and priority. The task list can also be sorted based on the icon,
            colour and priority.
          </div>,
          <div className={style.projectTextSection}>
            Front end was made with <b>React.js</b> and <b>TypeScript</b>, styled with <b>SASS</b>. Browers Local
            Storage used to store users list of tasks.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/todo-v2"
        liveLink="https://evan-or.github.io/todo-v2/"
      />
      <ProjectDisplay
        img={sortingApp}
        title={'Sorting Algorithms Visualization'}
        text={[
          <div className={style.projectTextSection}>
            Sorting Algorithms Visualization Website created with Vanilla <b>Javascript</b>. User can pick between
            different sorting algorithms along with sort speed and array size.
          </div>,
          <div className={style.projectTextSection}>
            Sorting Algorithms: <b>Bubble Sort</b>, <b>Insertion Sort</b>, <b>Selection Sort</b>.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/sortingAlgorithms"
        liveLink="https://evan-or.github.io/sortingAlgorithms/"
      />
      <ProjectDisplay
        img={portfolioSite}
        title={'My Portfolio Site'}
        text={[
          <div className={style.projectTextSection}>
            The current site you're scrolling though is a project of mine in itself. It's a mobile responive website to
            show off my web development projects.
          </div>,
          <div className={style.projectTextSection}>
            I created this site using <b>React.js</b>, <b>Typescript</b> and hosted with <b>Microsoft Azure</b>.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/portfolio-2023"
      />
    </div>
  );
}

export default ProjectDisplayWrapper;
