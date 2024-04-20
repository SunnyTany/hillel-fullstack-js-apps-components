const CardMovie = ({ movie }) => {
  return (
    <div className="movies__movie">
      <img className="movies__image" src={movie.poster ? movie.poster : '../../assets/images/no-image.jpg'} alt={movie.title} />
      <div className="movies__info">
        <p className="movies__year">{movie.year}</p>
        <h2 className="movies__title">{movie.title}</h2>
      </div>
    </div>
  )
}

export default CardMovie;