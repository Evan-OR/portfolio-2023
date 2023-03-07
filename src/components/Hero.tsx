import style from '../css/heroStyles.module.css';
import PageDivider from './svg/PageDivider';

function Hero() {
  return (
    <div className={style.heroWrapper}>
      <PageDivider />
      <div className={style.titleWrapper}>
        <div className={style.name}>Evan O'Rourke</div>
        <div className={style.profession}>
          {'<'}Software Engineer {'/>'}
        </div>
      </div>
    </div>
  );
}

export default Hero;
