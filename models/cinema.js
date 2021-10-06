const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.addFilm = function (film) {
  this.films.push(film);
}


Cinema.prototype.filmsByTitle = function () {
  const titles = this.films.map(film => {
    return film.title;
  })
  return titles;
}


Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.find(film => film.title === title);
    return result;
}


Cinema.prototype.findFilmsByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre)
    return result
}


Cinema.prototype.findFilmsByYear = function (year) {
  const result = this.films.filter(film => film.year === year)
    if (result.length > 0){ 
      return true
    } else {
      return false    
    }
}


module.exports = Cinema;
