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
        <button className={styles.buttonLeft} onClick={handleLeftClick}>
          <img className={styles.botao} src="assets/img/setaesquerda.png" alt="Scroll Left" />
        </button>
        <button className={styles.buttonRight} onClick={handleRightClick}>
          <img className={styles.botao} src="assets/img/setadireita.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Banner;