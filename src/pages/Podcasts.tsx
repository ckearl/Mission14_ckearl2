import styles from '../Something.module.css';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  return (
    <div className={styles.movie_height}>
      <div className={styles.podcast_height}>
        <div className={styles.podcasts_bg}>
          <div className="row h-100 d-flex justify-content-center">
            <div className="col-8 align-self-center">
              <div className="row text-center">
                <h3 className="text-light">
                  In addition to being a movie connoisseur, Joel Hilton also
                  hosts a successful Podcast, titled "Baconsale."
                </h3>
                <h3 className="text-light">Check it out here:</h3>
                <a
                  href="https://baconsale.com/"
                  className="text-light"
                  target="_blank"
                >
                  Baconsale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
