import stlye from '../css/aboutMeStyles.module.css';
import EmailIcon from './svg/EmailIcon';
import GitHubIcon from './svg/GitHubIcon';
import LinkedInIcon from './svg/LinkedInIcon';

function AboutMe() {
  return (
    <div className={stlye.aboutWrapper}>
      {/* ABOUT SECTION START */}
      <div className={stlye.aboutSectionWrapper}>
        <div className={stlye.title}>
          <div>
            <span className={stlye.titleHighlight}>About</span> Me
          </div>
        </div>

        <div className={stlye.infoWrapper}>
          <p>
            Hi, I'm Evan, an aspiring software engineer. I'm passionate about developing high-quality code that meets
            user needs and solving complex problems.
          </p>
          <p>I am currently pursuing a Bachelor of Science in Computing at the National College of Ireland.</p>
        </div>
      </div>
      {/* ABOUT SECTION END */}

      {/* MY SKILLSET START */}
      <div className={stlye.aboutSectionWrapper}>
        <div className={stlye.title}>
          <div>
            My <span className={stlye.titleHighlight}>Skillset</span>
          </div>
        </div>

        <div className={stlye.infoWrapper}>
          ;akldfjg adkg alkfg ;alkdfjg;l kajdfl;gadflgk ;aldfkga;dlfkg;ladkfg l;akdf glak
        </div>
      </div>
      {/* MY SKILLSET START */}

      {/* CONTACT ME START */}
      <div className={stlye.aboutSectionWrapper}>
        <div className={stlye.title}>
          <div>
            <span className={stlye.titleHighlight}>Contact</span> Me
          </div>
        </div>

        <div className={stlye.infoWrapper}>
          <div className={stlye.linkWrapper}>
            <EmailIcon styles={{ fill: '#2e86ab', width: '28px', marginRight: '10px' }} />
            <a className={stlye.link} href="mailto: theevanorourke@gmail.com">
              theevanorourke@gmail.com
            </a>
          </div>
          <div className={stlye.linkWrapper}>
            <LinkedInIcon styles={{ fill: '#2e86ab', width: '30px', marginRight: '10px' }} />
            <a target="_blank" className={stlye.link} href="https://www.linkedin.com/in/evan-orourke/">
              LinkedIn
            </a>
          </div>
          <div className={stlye.linkWrapper}>
            <GitHubIcon styles={{ fill: '#2e86ab', width: '30px', marginRight: '10px' }} />
            <a target="_blank" className={stlye.link} href="https://github.com/Evan-OR">
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT ME START */}
    </div>
  );
}

export default AboutMe;
