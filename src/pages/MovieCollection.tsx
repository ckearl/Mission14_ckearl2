import { useState } from 'react';
import data from '../MovieData.json';
import styles from '../Something.module.css';

const mds = data.MovieDataList;

function MovieCollection() {
  const [listOMovies, setListOMovies] = useState(mds);
  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Begins',
        Year: 2005,
        Director: 'Christopher Nolan',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div className={styles.movie_bg}>
        <div className={styles.movie_collection_msg}>
          <div className={styles.movie_msg_container}>
            <div className={styles.intro_msg}>
              <h3 className="text-light">
                This is Joel Hilton's Movie Collection!
              </h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10 align-self-center">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Director</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Edited</th>
                </tr>
              </thead>
              <tbody className="">
                {listOMovies.map((m) => (
                  <tr>
                    <td>{m.Title}</td>
                    <td>{m.Year}</td>
                    <td>{m.Director}</td>
                    <td>{m.Rating}</td>
                    <td>{m.Category}</td>
                    <th>{m.Edited}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCollection;
