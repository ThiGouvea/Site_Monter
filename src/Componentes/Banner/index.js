import { useEffect, useState, useRef } from 'react';
import styles from './Banner.module.css';

function Banner() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('assets/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className={styles.container}>
      <div className={styles.carousel} ref={carousel}>
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.image}>
                <img src={image} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Banner;