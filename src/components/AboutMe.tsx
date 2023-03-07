import stlye from '../css/aboutMeStyles.module.css';

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

        <div className={stlye.infoWrapper}></div>
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
          <a className={stlye.link} href="mailto: theevanorourke@gmail.com">
            theevanorourke@gmail.com
          </a>
          <br />
          <a className={stlye.link} href="">
            LinkedIn
          </a>
          <br />
          <a className={stlye.link} href="">
            GitHub
          </a>
        </div>
      </div>
      {/* CONTACT ME START */}
    </div>
  );
}

export default AboutMe;
