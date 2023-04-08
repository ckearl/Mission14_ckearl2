import { useEffect, useState } from 'react';
import data from '../MovieData.json';
import styles from '../Something.module.css';
import { Movie } from '../movie/movie';

function MovieCollection() {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchMovies();
  }, []);

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
                <tr className="text-nowrap">
                  <th>Title</th>
                  <th>Year</th>
                  <th>Director</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Edited</th>
                  <th>Lent To</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="">
                {listOfMovies.map((m) => (
                  <tr key={m.movieID}>
                    <td>{m.title}</td>
                    <td>{m.year}</td>
                    <td>{m.director}</td>
                    <td>{m.rating}</td>
                    <td>{m.category}</td>
                    <th>{m.edited}</th>
                    <th>{m.lentTo}</th>
                    <th>{m.notes}</th>
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
