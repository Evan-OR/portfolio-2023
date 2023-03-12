import { useEffect, useRef } from 'react';
import style from '../css/heroStyles.module.css';
import PageDivider from './svg/PageDivider';

function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const professionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Only runs once');
    titleRef.current?.classList.add(style.nameAnimation);
    professionRef.current?.classList.add(style.professionAnimation);
  }, []);

  return (
    <div className={style.heroWrapper}>
      <PageDivider flip={false} />
      <div className={style.titleWrapper}>
        <div ref={titleRef} className={style.name}>
          Evan O'Rourke
        </div>
        <div ref={professionRef} className={style.profession}>
          {'<'}Software Engineer {'/>'}
        </div>
      </div>
    </div>
  );
}

export default Hero;
