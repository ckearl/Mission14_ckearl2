import React from 'react';
import styles from '../Something.module.css';
const Home = (props: any) => {
  return (
    <div className={styles.podcast_height}>
      <div className={styles.index_container}>
        <div className={styles.index_left_image}>
          <img
            src="./joel.jpg"
            alt="joelhilton"
            width="85%"
            className={styles.joel_photo}
          />
        </div>
        <div className={styles.index_right_card}>
          <h3>
            This is the amazing movie database for the wonderful Joel Hilton.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
