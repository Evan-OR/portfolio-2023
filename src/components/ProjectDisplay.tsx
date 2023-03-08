import style from '../css/projectDisplay.module.css';

type ProjectDisplayProps = {
  img: string;
  title: string;
  text: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>[];
  codeLink: string;
  liveLink?: string;
};

function ProjectDisplay(props: ProjectDisplayProps) {
  const { img, text, title, codeLink, liveLink } = props;
  return (
    <div className={style.projectWrapper}>
      <img draggable={false} className={style.projectImage} src={img}></img>

      <div className={style.projectInfoWrapper}>
        <div className={style.projectTitle}>{title}</div>
        {<>{...text}</>}
        <div>
          {liveLink ? (
            <a target="_blank" href={liveLink} className={style.projectButton}>
              Live Project
            </a>
          ) : (
            <></>
          )}
          <a target="_blank" href={codeLink} className={style.codeButton}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
