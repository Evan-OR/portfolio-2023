import style from '../css/projectDisplay.module.css';

type ProjectDisplayProps = {
  img: string;
  title: string;
  text: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>[];
};

function ProjectDisplay(props: ProjectDisplayProps) {
  const { img, text, title } = props;
  return (
    <div className={style.projectWrapper}>
      <img draggable={false} className={style.projectImage} src={img}></img>

      <div className={style.projectInfoWrapper}>
        <div className={style.projectTitle}>{title}</div>
        {<>{...text}</>}
      </div>
    </div>
  );
}

export default ProjectDisplay;
