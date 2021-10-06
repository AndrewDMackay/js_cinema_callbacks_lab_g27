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


Cinema.prototype.findFilmsOverLength = function (length) {
  const result = this.films.filter(film => film.length >= length)
      return true
}


// Cinema.prototype.findFilmLengths = function () {
//   const result = this.films.map(film => {
//     return film.length;
//   })
//   return result;
// }


Cinema.prototype.findTotalRunningTime = function () {
  const result = this.films.reduce((accumulator, film) => {
    return accumulator + film.length
  })
  return result
}


Cinema.prototype.findFilmsByProperty = function (property, value) {
  return this.films.filter((film) => {
      return film[property] === value;
  },)
};


module.exports = Cinema;

