import CardMovie from "./CardMovie";

const MoviesList = ({movies}) => {
  return(
    <section className="movies-list">
      {
        movies ? 
        (movies.forEach( movie => {
          return <CardMovie key={movie.id} movie={movie} />
        })) : 
        <h2>No movies</h2>
      }
    </section>
  );
}

export default MoviesList;