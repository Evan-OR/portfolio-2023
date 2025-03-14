import stlye from '../css/aboutMeStyles.module.css';
import AzureIcon from './svg/BackendIcons/AzureIcon';
import MySQLIcon from './svg/BackendIcons/MySQLIcon';
import NodeJsIcon from './svg/BackendIcons/NodeJsIcon';
import EmailIcon from './svg/EmailIcon';
import CSSIcon from './svg/frontendIcons/CSSIcon';
import HTMLIcon from './svg/frontendIcons/HTMLIcon';
import JavaScriptIcon from './svg/frontendIcons/JavaScriptIcon';
import ReactIcon from './svg/frontendIcons/ReactIcon';
import SassIcon from './svg/frontendIcons/SassIcon';
import TypescriptIcon from './svg/frontendIcons/TypescriptIcon';
import GitHubIcon from './svg/GitHubIcon';
import LinkedInIcon from './svg/LinkedInIcon';
import GitIcon from './svg/otherIcons/GitIcon';
import JavaIcon from './svg/otherIcons/JavaIcon';
import cv from "../cv/Evan O'Rourke CV.pdf";
import FileIcon from './svg/FileIcon';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import PythonIcon from './svg/otherIcons/PythonIcon';

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className={stlye.aboutWrapper}>
      {/* ABOUT SECTION START */}
      <div className={stlye.aboutSectionWrapper} data-aos="fade-up">
        <div className={stlye.title}>
          <div>
            <span className={stlye.titleHighlight}>About</span> Me
          </div>
        </div>

        <div className={`${stlye.infoWrapper} ${stlye.first}`}>
          <p>
            Hello 👋, I'm Evan, a Software Engineer and B.Sc. Computing student at NCI. I'm passionate about software
            engineering and have gained knowledge and skills through two internships at Shutterstock and Optum,
            coursework and personal projects.
          </p>
          <p>
            I have experience working with various frontend and backend technologies, and enjoy tackling complex
            problems. I'm dedicated to continuous learning and growth, eager to apply and expand my engineering skills.
          </p>
        </div>
      </div>
      {/* ABOUT SECTION END */}

      {/* MY SKILLSET START */}
      <div className={stlye.aboutSectionWrapper} data-aos="fade-up">
        <div className={stlye.title}>
          <div>
            My <span className={stlye.titleHighlight}>Skillset</span>
          </div>
        </div>

        <div className={stlye.infoWrapper}>
          <div className={stlye.iconRow}>
            <PythonIcon title="Python" styles={{ width: '60px', height: '60px' }} />
            <TypescriptIcon title="TypeScript" styles={{ width: '56px', borderRadius: '6px' }} />
            <JavaScriptIcon title="JavaScript" styles={{ width: '56px' }} />
            <JavaIcon title="Java" styles={{ width: '50px' }} />
            <ReactIcon title="React" styles={{ width: '60px' }} />
            <HTMLIcon title="HTML" styles={{ width: '46px' }} />
            <CSSIcon title="CSS" styles={{ width: '46px' }} />
            <AzureIcon title="Azure" styles={{ width: '50px' }} />
            <NodeJsIcon title="Node.js" styles={{ width: '80px' }} />
            <MySQLIcon title="MySQL" styles={{ width: '100px' }} />
            <GitIcon title="git" styles={{ width: '100px' }} />
          </div>
        </div>
      </div>
      {/* MY SKILLSET START */}

      {/* CONTACT ME START */}
      <div className={stlye.aboutSectionWrapper} data-aos="fade-up">
        <div className={stlye.title}>
          <div>
            <span className={stlye.titleHighlight}>Contact</span> Me
          </div>
        </div>

        <div id={stlye.linkWrapper} className={stlye.infoWrapper}>
          <div className={stlye.linkWrapper}>
            <a title="GitHub" target="_blank" className={stlye.link} href="https://github.com/Evan-OR">
              <GitHubIcon styles={{ fill: '#2e86ab', width: '30px' }} />
            </a>
          </div>

          <div className={stlye.linkWrapper}>
            <a title="LinkedIn" target="_blank" className={stlye.link} href="https://www.linkedin.com/in/evan-orourke/">
              <LinkedInIcon styles={{ fill: '#2e86ab', width: '30px' }} />
            </a>
          </div>

          <div className={stlye.linkWrapper}>
            <a title="Email" className={stlye.link} href="mailto:theevanorourke@gmail.com">
              <EmailIcon styles={{ fill: '#2e86ab', width: '28px' }} />
            </a>
          </div>

          <div className={stlye.linkWrapper}>
            <a title="CV" target="_blank" className={stlye.link} href={cv}>
              <FileIcon styles={{ fill: '#2e86ab', width: '28px' }} />
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT ME START */}
    </div>
  );
}

export default AboutMe;
