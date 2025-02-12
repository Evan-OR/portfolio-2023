import style from '../css/projectDisplay.module.css';
import PageDivider from './svg/PageDivider';
import teamProjectImage from '../images/teamProject.png';
import weatherApp from '../images/Responsive_Weather.png';
import taskManager from '../images/Responsive_taskmanager.png';
import sortingApp from '../images/sortingImg.png';
import portfolioSite from '../images/Responsive_portfolio.png';
import ProjectDisplay from './ProjectDisplay';
import lilLink from '../images/lil_link.png';

function ProjectDisplayWrapper() {
  return (
    <div className={style.projectDisplayWrapper}>
      <PageDivider flip={true} />
      <div className={style.title}>{'<Projects />'}</div>

      <ProjectDisplay
        img={lilLink}
        altText="Image of my Lil Link App"
        title={'URL Shortener and QR Code Generator '}
        text={[
          <div className={style.projectTextSection}>
            This website I created allows users to shorten and generate QR codes for their URL's.
          </div>,
          <div className={style.projectTextSection}>
            The project was created using <b>Python</b> and <b>Flask</b> to create the <b>REST API</b> that served{' '}
            <b>HTML templates</b> to the user frontend and interacted with the <b>MySQL</b> database. Both the web app
            and the database are hosted on <b>Microsoft Azure</b>.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/url-shortener"
        liveLink="https://www.lillink.net"
      />
      <ProjectDisplay
        img={teamProjectImage}
        altText="Image of my Team Project App"
        title={'Drink Recommendation App'}
        text={[
          <div className={style.projectTextSection}>
            This is a team project I worked on in college. It used a recommendation system to suggest drinks for users
            to try out based on their likes.
          </div>,
          <div className={style.projectTextSection}>
            The frontend was made with <b>React.js</b> and <b>TypeScript</b>, styled with <b>SASS</b>.
          </div>,
          <div className={style.projectTextSection}>
            We used <b>Node.js</b> and <b>express.js</b> to create out own <b>REST API</b> and we hosted a <b>MySQL </b>
            database using <b>Microsoft Azure</b>.
          </div>,
        ]}
        codeLink="https://github.com/Evan-OR/team-project-module"
      />
      <ProjectDisplay
        img={weatherApp}
        altText="Image of my Weather App"
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
        altText="Image of my Task Manager App"
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
        altText="Image of my Sorting Algorithms Visualization App"
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
        altText="My Portfolio Site Image"
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
